import { Request, Response, Router } from 'express'
import responseStatus from '../enum/response-status'
import exception from '../exception/exception'
import responseObj from '../libs/response'

export const router = Router()

;(async () => {
  router.get('/', (req: Request, res: Response) => {
    res.send('I am ok..')
  })
  router.post('/create-lead', async (req: Request, res: Response) => {
    try {
      console.log(req.body)
      res
        .status(responseStatus.CREATE)
        .send(responseObj('Вопрос успешно отправлен'))
    } catch (e) {
      res.status(responseStatus.SERVER_ERROR).send(exception(e))
    }
  })
})()
