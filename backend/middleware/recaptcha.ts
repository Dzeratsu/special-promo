// import { NextFunction, Request, Response } from 'express'
// import * as dotenv from 'dotenv'
// import axios from 'axios'
// import exception from '../exception/exception'
// import message from '../enum/message'
// import responseStatus from '../enum/response-status'


// const googleURL = 'https://www.google.com/recaptcha/api/siteverify?secret='
// export default async function recaptcha(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   const siteKey = req.body.recaptcha_response_invisible
//   const url = `${googleURL}${process.env.SECRET_KEY}&response=${siteKey}`
//   try {
//     const { data } = await axios.get(url)
//     if (data.success) {
//       next()
//     } else {
//       res
//         .status(responseStatus.UNAUTHORIZED)
//         .send(exception(message.errorRecaptcha))
//     }
//   } catch (e) {
//     res.status(responseStatus.SERVER_ERROR).send(exception(e.message))
//   }
// }

import type { Request, Response, NextFunction } from 'express';
import * as https from 'https';
import Exception from '../exception/exception';
import ResponseStatus from '../enum/response-status';

const SMARTCAPTCHA_HOST = 'smartcaptcha.cloud.yandex.ru';
const SMARTCAPTCHA_PATH = '/validate';

export default function recaptcha(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // 🔒 Флаг: чтобы отправить ответ только один раз
  let responseSent = false;
  
  const sendResponse = (status: number, message: string) => {
    if (responseSent || res.headersSent) return;
    responseSent = true;
    res.status(status).send(Exception(message));
  };

  const token = req.body.captchaToken?.trim();

  if (!token) {
    console.warn('[recaptcha] Missing token');
    sendResponse(ResponseStatus.UNAUTHORIZED, 'Токен капчи отсутствует');
    return;
  }

  const serverKey = (process.env.SMARTCAPTCHA_SERVER_KEY || process.env.SECRET_KEY)?.trim();
  if (!serverKey) {
    console.error('[recaptcha] Server key not configured');
    sendResponse(ResponseStatus.SERVER_ERROR, 'Server configuration error');
    return;
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ip = (
    Array.isArray(forwarded)
      ? forwarded[0]
      : (forwarded || '').split(',')[0].trim()
  ) || req.socket?.remoteAddress || '';

  console.log('[recaptcha] Validating...', { ip: ip || 'unknown' });
  const start = Date.now();

  const postData = new URLSearchParams({
    secret: serverKey,
    token,
    ...(ip && { ip })
  }).toString();

  const options: https.RequestOptions = {
    hostname: SMARTCAPTCHA_HOST,
    port: 443,
    path: SMARTCAPTCHA_PATH,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    },
    timeout: 10000,
    family: 4
  };

  const request = https.request(options, (response) => {
    let content = '';
    response.on('data', (chunk) => { content += chunk; });
    
    response.on('end', () => {
      if (responseSent || res.headersSent) return;
      
      const elapsed = Date.now() - start;
      
      if (response.statusCode !== 200) {
        console.error(`[recaptcha] HTTP ${response.statusCode}: ${content}`);
        sendResponse(ResponseStatus.SERVER_ERROR, 'Ошибка сервиса капчи');
        return;
      }

      try {
        const parsed = JSON.parse(content);
        console.log('[recaptcha] Response in', elapsed, 'ms:', parsed?.status);

        if (parsed?.status === 'ok') {
          next(); // ✅ Успех — передаём управление
        } else {
          console.warn('[recaptcha] Validation failed:', parsed);
          sendResponse(ResponseStatus.UNAUTHORIZED, parsed?.message || 'Ошибка проверки капчи');
        }
      } catch (err: any) {
        console.error('[recaptcha] Parse error:', err.message);
        sendResponse(ResponseStatus.SERVER_ERROR, 'Ошибка обработки ответа капчи');
      }
    });
  });

  // 🔥 Единый обработчик ошибок (timeout тоже вызывает error после destroy)
  request.on('error', (error: any) => {
    if (responseSent || res.headersSent) return;
    
    console.error('[recaptcha] Request error:', error.message);
    
    // Если был таймаут — ошибка "socket hang up" это ожидаемо, не дублируем ответ
    if (error.code === 'ECONNABORTED' || error.message.includes('socket hang up')) {
      sendResponse(ResponseStatus.SERVER_ERROR, 'Сервис капчи не отвечает');
    } else {
      sendResponse(ResponseStatus.SERVER_ERROR, 'Ошибка сети');
    }
  });

  // 🔥 Таймаут: просто уничтожаем запрос, error-обработчик отправит ответ
  request.on('timeout', () => {
    console.error('[recaptcha] Timeout');
    request.destroy(); // Это вызовет событие 'error' с кодом 'ECONNABORTED' или 'socket hang up'
    // Не отправляем ответ здесь!
  });

  request.write(postData);
  request.end();
}