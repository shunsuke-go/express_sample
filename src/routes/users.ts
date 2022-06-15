import { UserService } from '@src/services/UserService'
import express, { Request, Response } from 'express'

export const router = express.Router()

router.get('/', async (_req: Request, res: Response) => {
  const allUsers = await UserService.getUser()
  return res.status(200).send({
    users: allUsers.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }))
  })
})
