import { DatabaseProvider } from 'src/libs/database/database-provider'

import { UserEntity } from '../user.entity'
import IUserRepository from './user.repository'

class UserRepository implements IUserRepository {
  private users: UserEntity[]

  constructor() {
    this.users = DatabaseProvider.getModel<UserEntity>('users')
  }

  async addUser(user: UserEntity): Promise<void> {
    this.users.push(user)
  }
  async getUserById(id: UserEntity['id']): Promise<UserEntity | undefined> {
    return this.users.find((user) => user.id === id)
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return this.users
  }
}

export default UserRepository
