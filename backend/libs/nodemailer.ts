import nodemailer from 'nodemailer'
import message from '../enum/message'
import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  port: 587,
  auth: {
    user: 'tehnop18@gmail.com',
    pass: "gqaa vvsq apfz oeuy"
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
