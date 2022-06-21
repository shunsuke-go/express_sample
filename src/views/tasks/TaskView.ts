import { Task } from '@prisma/client'

export class TaskView {
  index(tasks: Task[]) {
    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      isDone: task.isDone
    }))
  }

  show(task: Task) {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      isDone: task.isDone
    }
  }
}
