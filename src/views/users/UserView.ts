import { User } from '@prisma/client'

export class UserView {
  show(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }
}
