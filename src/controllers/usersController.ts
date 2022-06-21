import { UserService } from '~/services/UserService'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response, Router } from 'express'

export const userRouter = Router()

userRouter.get('/', async (req: Request, res: Response) => {
  const allUsers = await UserService.all()
  return res.status(200).send({
    users: allUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email
    }))
  })
})
userRouter.get('/:id', async (req: Request, res: Response) => {
  const user = await UserService.find({ id: parseInt(req.params?.id) })
  return res.status(200).send({
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  })
})
userRouter.post('/', async (req: Request, res: Response) => {
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
    console.error(e)
  }
})
