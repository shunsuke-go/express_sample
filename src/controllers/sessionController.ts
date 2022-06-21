import { NextFunction, Request, Response, Router } from 'express'
import { User } from '@prisma/client'
import { verifyToken } from '~/helpers/verifyToken'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserView } from '~/views/users/UserView'
import { UserService } from '~/services/UserService'
import { unauthorizedException } from '~/helpers/httpException'

export const sessionRouter = Router()
const { show } = new UserView()

sessionRouter.get('/', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user
  if (user) {
    res.status(200).send(show(user))
  } else {
    next(unauthorizedException())
  }
})

sessionRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: { email?: string; password?: string } = req.body
  const user = await UserService.find({ email })
  if (!user) next(unauthorizedException())

  const isOk = bcrypt.compareSync(password, user.hasedPassword)
  if (isOk) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    return res.status(200).json({ token })
  } else {
    next(unauthorizedException())
  }
})
