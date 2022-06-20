import { Request, Response, Router } from 'express'
import { verifyToken } from '~/helpers/verifyToken'
import { Task, User } from '@prisma/client'
import { TaskService } from '~/services/TaskService'

export const taskRouter = Router()

taskRouter.get('/', verifyToken, async (req: Request, res: Response) => {
  const user: User = res.locals.user
  const tasks: Task[] = await TaskService.all({ userId: user.id })

  res.status(200).send({ user: user, tasks: tasks })
})

taskRouter.get('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    const task: Task = await TaskService.find({ id: parseInt(req.params.id) })
    res.status(200).send({ task })
  } catch (e) {
    res.status(404).send({ message: 'not found'})
  }
})

taskRouter.post('/', verifyToken, async (req: Request, res: Response) => {
  const user: User = res.locals.user
  console.log("aaaaaaaaaa")
  const { title, description, isDone }: Task = req.body
  try {
    await TaskService.create({ title, description, isDone, userId: user.id })
    res.status(201).send({ message: 'created'})
  } catch (e){
    res.status(403).send({ message: 'post error'})
  }
})

taskRouter.delete('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    await TaskService.delete({ id: parseInt(req.params.id) })
    res.status(200).send()
  } catch (e) {
    res.status(400).send({ message: 'delete error'})
  }
})

taskRouter.patch('/:id', verifyToken, async (req: Request, res: Response) => {
  const { title, description, isDone } = req.body
  try {
    await TaskService.update({ id: parseInt(req.params.id), data: { title, description, isDone }})
    res.status(200).send()
  } catch (e) {
    res.status(400).send({ message: 'delete error'})
  }
})