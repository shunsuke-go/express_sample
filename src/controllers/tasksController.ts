import { NextFunction, Request, Response, Router } from 'express'
import { verifyToken } from '~/helpers/verifyToken'
import { Task, User } from '@prisma/client'
import { TaskView } from '~/views/tasks/TaskView'
import { TaskService } from '~/services/TaskService'
import { badRequestException, forbiddenException, notFoundException } from '~/helpers/httpException'

export const taskRouter = Router()
const { index, show } = new TaskView()

taskRouter.get('/', verifyToken, async (req: Request, res: Response) => {
  const user: User = res.locals.user
  const tasks: Task[] = await TaskService.all({ userId: user.id })
  res.status(200).send(index(tasks))
})

taskRouter.get('/:id', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task: Task = await TaskService.find({ id: parseInt(req.params.id) })
    res.status(200).send(show(task))
  } catch (e) {
    next(notFoundException())
  }
})

taskRouter.post('/', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user
  const { title, description }: Task = req.body
  try {
    await TaskService.create({
      title,
      description,
      isDone: false,
      userId: user.id
    })
    res.status(201).send({ message: 'created' })
  } catch (e) {
    next(forbiddenException())
  }
})

taskRouter.delete('/:id', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TaskService.delete({ id: parseInt(req.params.id) })
    res.status(200).send()
  } catch (e) {
    next(badRequestException())
  }
})

taskRouter.patch('/:id', verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  const {
    title,
    description,
    isDone
  }: { title: string; description: string; isDone: '1' | '2' } = req.body
  const enumOfIsDone = {
    1: true,
    2: false
  }
  try {
    await TaskService.update({
      id: parseInt(req.params.id),
      data: { title, description, isDone: enumOfIsDone[isDone] }
    })
    res.status(200).send()
  } catch (e) {
    next(badRequestException())
  }
})
