import express, { Express } from 'express'
import bodyParser from 'body-parser'
import { router } from './router/router'
import message from './enum/message'
import connect from './libs/nodemailer'
const app: Express = express()

;(async () => {
  try {
    await connect
    app.use(bodyParser.json())
    app.use(router)
    console.log(message.start)
  } catch (e: unknown) {
    console.log(e)
  }
})()
export default app
