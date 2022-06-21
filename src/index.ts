import { ExpressApp } from '~/ExpressApp'
import express, { Application } from 'express'

const app: Application = express()
const expressService = new ExpressApp(app)

expressService.useAll()

try {
  app.listen(process.env.PORT || 3001)
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
