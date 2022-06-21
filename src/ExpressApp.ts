import express, { Application } from 'express'
import cors from 'cors'
import { corsOptions } from '~/helpers/corsOptions'
import { taskRouter } from '~/controllers/tasksController'
import { sessionRouter } from '~/controllers/sessionController'
import { userRouter } from '~/controllers/usersController'

export class ExpressApp {
  app: Application

  constructor (app: Application) {
    this.app = app
  }

  useAll () {
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use('/users', userRouter)
    this.app.use('/session', sessionRouter)
    this.app.use('/tasks', taskRouter)
  }
}
