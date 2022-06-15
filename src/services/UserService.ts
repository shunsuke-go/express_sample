import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export class UserService {
  static async getUser() {
    return await prisma.user.findMany()
  }
}