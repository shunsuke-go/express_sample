import { Request, Response, Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserService } from '~/services/UserService'

export const loginRouter = Router()

loginRouter.post('/', async (req: Request, res: Response) => {
  const { email, password }: { email?: string; password?: string } = req.body
  const user = await UserService.find({ email })
  if (!user) return res.status(401).json({ message: 'miss' })

  const isOk = bcrypt.compareSync(password, user.hasedPassword)
  if (isOk) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    return res.status(200).json({ token })
  } else {
    return res.status(401).json({ error: 'Error' })
  }
})
