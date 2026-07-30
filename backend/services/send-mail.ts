import connect from '../libs/nodemailer'
import checkRegion from '../services/checkRegion'

interface Ilead {
    name: string;
    phone: string;
    region: string;
    recaptcha_response_invisible: string;
    text: string;
}
// export default async function sendLead(data: Ilead) {
//   const email = checkRegion(data.region)
//   try {
//     return await connect.sendMail({
//       from: "SPECIAL.nort-udm.ru",
//       to: `fadee.stas15@gmail.com, ${email}`,
//       subject: "Вопрос с сайта special.nort-udm.ru",
//       html: `<span>Имя: </span>${data.name} <br> <span>Телефон: </span>${data.phone}, <br> <span>Регион: </span>${data.region} <br> <span>Вопрос: </span>${data.text}`
//     })
//   }catch(e) {
//     console.error(e)
//     throw new Error('Ошибка отправки письма')
//   }

// }
// services/send-lead.ts
export default async function sendLead(data: Ilead) {
  const email = checkRegion(data.region)
  
  try {
    const from =
      process.env.SMTP_FROM ||
      `"pirilax-special.ru" <${process.env.SMTP_USER}>`
    const toBase =
      process.env.SMTP_TO ||
      'a498008@yandex.ru, special@ooonort.ru, tehnop18@gmail.com'

    const info = await connect.sendMail({
      from,
      to: `${toBase}, ${email}`,
      subject: process.env.SMTP_SUBJECT || 'Вопрос с сайта pirilax-special.ru',
      html: `<b>Имя:</b> ${data.name}<br><b>Телефон:</b> ${data.phone}<br><b>Регион:</b> ${data.region}<br><b>Вопрос:</b> ${data.text}`
    })
    console.log('✅ Email sent:', info.messageId)
    return info
  } catch(e: any) {
    // 🔥 Детальный лог ошибки
    console.error('❌ sendMail failed:', {
      message: e?.message,
      code: e?.code,
      command: e?.command,
      response: e?.response,
      stack: e?.stack
    })
    
    // Выбрасываем ошибку с оригинальным сообщением
    throw new Error(`SMTP error: ${e?.message || 'Неизвестная ошибка'}`)
  }
}