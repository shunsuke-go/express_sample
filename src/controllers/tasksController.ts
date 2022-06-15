import { Request, Response, Router } from 'express'
import bcrypt from 'bcrypt'
import { verifyToken } from '~/helpers/verifyToken'
import jwt from 'jsonwebtoken'
import { UserService } from '~/services/UserService'

export const taskRouter = Router()

taskRouter.get('/', verifyToken, () => {

})