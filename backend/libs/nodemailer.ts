import nodemailer from 'nodemailer'
import message from '../enum/message'
import * as dotenv from 'dotenv'
dotenv.config()

const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS

if (!user || !pass) {
  throw new Error('SMTP_USER and SMTP_PASS must be set in environment')
}

const config = {
  host: process.env.SMTP_HOST || 'smtp.yandex.ru',
  secure: process.env.SMTP_SECURE !== 'false',
  tls: {
    rejectUnauthorized: false,
  },
  port: Number(process.env.SMTP_PORT || 465),
  auth: {
    user,
    pass,
  },
}

const connect = nodemailer.createTransport(config)

connect.verify((err) => {
  if (err) {
    console.info(err)
    throw new Error(message.failMail)
  } else {
    console.info(message.startMail)
  }
})
export default connect

/**
 * Настройки нодемайлера
 */
