import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { UserService } from '~/services/UserService';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.json({ message: 'no header' })
  if (authHeader.split(" ")[0] !== "Bearer") return res.json({ message: 'header format error' })

  try {
    const token = jwt.verify(authHeader.split(" ")[1], process.env.JWT_SECRET)
    if (typeof token === 'string') return
    if (!token.id) return
    const user = await UserService.find({ id: parseInt(token.id) })
    if (user) {
      res.locals.user = user
      next()
    } else {
      res.json({ error: "auth error" })
    }
  } catch (e) {
    console.log(e.message)
    res.json({ error: e.message })
  }
}