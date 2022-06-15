import express, { Application } from 'express'
import { loginRouter } from '~/controllers/loginController'
import { userRouter } from '~/controllers/usersController'

export class ExpressApp {
  app: Application

  constructor(app: Application) {
    this.app = app
  }
  useAll () {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use('/users', userRouter)
    this.app.use('/login', loginRouter)
  }
}