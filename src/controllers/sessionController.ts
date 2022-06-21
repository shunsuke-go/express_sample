import { Request, Response, Router } from 'express'
import { User } from '@prisma/client'
import { verifyToken } from '~/helpers/verifyToken'

export const sessionRouter = Router()

sessionRouter.get('/', verifyToken, async (req: Request, res: Response) => {
  const user: User = res.locals.user
  if (user) {
    res.status(200).send(user)
  } else {
    res.status(401).send()
  }
})
