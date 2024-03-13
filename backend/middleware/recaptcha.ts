import { NextFunction, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import axios from 'axios'
import exception from '../exception/exception'
import message from '../enum/message'
import responseStatus from '../enum/response-status'

dotenv.config()

const googleURL = 'https://www.google.com/recaptcha/api/siteverify?secret='
export default async function recaptcha(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const siteKey = req.body.recaptcha_response_invisible
  const url = `${googleURL}${process.env.SECRET_KEY}&response=${siteKey}`
  try {
    const { data } = await axios.get(url)
    if (data.success) {
      next()
    } else {
      res
        .status(responseStatus.UNAUTHORIZED)
        .send(exception(message.errorRecaptcha))
    }
  } catch (e) {
    res.status(responseStatus.SERVER_ERROR).send(exception(e.message))
  }
}
