import { Request, Response, Router } from 'express'
import { verifyToken } from '~/helpers/verifyToken'
import { Task, User } from '@prisma/client'
import { TaskView } from '~/views/tasks/TaskView'
import { TaskService } from '~/services/TaskService'

export const taskRouter = Router()
const { index, show } = new TaskView()

taskRouter.get('/', verifyToken, async (req: Request, res: Response) => {
  const user: User = res.locals.user
  const tasks: Task[] = await TaskService.all({ userId: user.id })
  res.status(200).send(index(tasks))
})

taskRouter.get('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    const task: Task = await TaskService.find({ id: parseInt(req.params.id) })
    res.status(200).send(show(task))
  } catch (e) {
    res.status(404).send({ message: 'not found' })
  }
})

taskRouter.post('/', verifyToken, async (req: Request, res: Response) => {
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
    res.status(403).send({ message: 'post error' })
  }
})

taskRouter.delete('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    await TaskService.delete({ id: parseInt(req.params.id) })
    res.status(200).send()
  } catch (e) {
    res.status(400).send({ message: 'delete error' })
  }
})

taskRouter.patch('/:id', verifyToken, async (req: Request, res: Response) => {
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
    res.status(400).send({ message: 'delete error' })
  }
})
