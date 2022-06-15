import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
export class UserService {
  static async all() {
    return await prisma.user.findMany()
  }

  static async find({ id, email }: { id?: number, email?: string }) {
    return await prisma.user.findUnique({
      where: { id, email }
    })
  }

  static async create(name: string, email: string, hasedPassword: string) {
    await prisma.user.create({ data: { name, email, hasedPassword } })
  }
}