import { Request, Response, Router } from 'express'
import responseStatus from '../enum/response-status'
import sendMail from '../services/send-mail'
import exception from '../exception/exception'
import responseObj from '../libs/response'
import recaptcha from '../middleware/recaptcha'

export const router = Router()

;(async () => {
  router.get('/', (req: Request, res: Response) => {
    res.send('I am ok..')
  })
  router.post('/create-lead', recaptcha, async (req: Request, res: Response) => {
    try {
      await sendMail(req.body)
      res
        .status(responseStatus.CREATE)
        .send(responseObj('Вопрос успешно отправлен'))
    } catch (e) {
      res.status(responseStatus.SERVER_ERROR).send(exception(e))
    }
  })
})()
