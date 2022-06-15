import { UserService } from '~/services/UserService'
import bcrypt from 'bcrypt'
import { Request, Response, Router } from 'express'

export const userRouter = Router()

userRouter.get('/', async (req: Request, res: Response) => {
  const allUsers = await UserService.all()
  return res.status(200).send({
    users: allUsers.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
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
  const { name, email, password }: { name?: string, email?: string, password?: string } = req.body
  const hasedPassword = bcrypt.hashSync(password, 10)

  try {
    await UserService.create(name, email, hasedPassword)
    return res.status(200).json()
  } catch(e) {
    console.error(e)
  }
})
