import { PrismaClient, Task } from '@prisma/client'

const prisma = new PrismaClient()

export class TaskService {
  static async all({ userId }: { userId: number }) {
    return await prisma.task.findMany({ where: { userId } })
  }

  static async find({ id }: { id: number }) {
    return await prisma.task.findUnique({
      where: { id }
    })
  }

  static async create({
    title,
    description,
    isDone,
    userId,
  }: { title: string, description: string, isDone: boolean, userId: number }) {
    await prisma.task.create({
      data: {
        title,
        description,
        isDone,
        userId
      }
    })
  }

  static async delete({ id }: { id: number }) {
    return await prisma.task.delete({ where: { id } })
  }

  static async update({ id, data }: { id: number, data: {} }) {
    return await prisma.task.update({ where: { id }, data })
  }
}