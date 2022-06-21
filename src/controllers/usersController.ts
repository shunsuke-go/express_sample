import { UserService } from '~/services/UserService'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserView } from '~/views/users/UserView'
import { NextFunction, Request, Response, Router } from 'express'
import { badRequestException } from '~/helpers/httpException'

export const userRouter = Router()
const { show } = new UserView()

userRouter.get('/:id', async (req: Request, res: Response) => {
  const user = await UserService.find({ id: parseInt(req.params?.id) })
  return res.status(200).send(show(user))
})
userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const {
    name,
    email,
    password
  }: { name?: string; email?: string; password?: string } = req.body
  const hasedPassword = bcrypt.hashSync(password, 10)
  try {
    await UserService.create(name ?? email, email, hasedPassword)
    const user = await UserService.find({ email })
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    return res.status(200).json({ token })
  } catch (e) {
    next(badRequestException())
  }
})
