import { UserEntity } from '../user.entity'
import IUserRepository from './user.repository'

const users: UserEntity[] = []

class UserRepository implements IUserRepository {
  private users: UserEntity[]

  constructor() {
    this.users = users
  }
  addUser(user: UserEntity): void {
    this.users.push(user)
  }
  getUserById(id: UserEntity['id']): UserEntity | undefined {
    return this.users.find((user) => user.id === id)
  }
  getAllUsers(): UserEntity[] {
    return this.users
  }
}

export default UserRepository