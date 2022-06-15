import { PrismaClient } from '@prisma/client'
import { router } from './routes/users'
import express, { Application, Request, Response } from 'express'

export const app: Application = express()
export const prisma = new PrismaClient()

const PORT = 3001
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/users', router)

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}