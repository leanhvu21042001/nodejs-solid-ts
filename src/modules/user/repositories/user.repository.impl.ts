import { DatabaseProvider } from 'src/libs/database/database-provider'

import { UserEntity } from '../user.entity'
import IUserRepository from './user.repository'

class UserRepository implements IUserRepository {
  private users: UserEntity[]

  constructor() {
    this.users = DatabaseProvider.getModel<UserEntity>('users')
  }

  async getByUsername(username: UserEntity['username']): Promise<UserEntity | undefined> {
    return await this.users.find((user) => user.username === username)
  }
  async add(user: UserEntity): Promise<UserEntity['id']> {
    await this.users.push(user)
    return user.id
  }
  async getById(id: UserEntity['id']): Promise<UserEntity | undefined> {
    return await this.users.find((user) => user.id === id)
  }
  async getAll(): Promise<UserEntity[]> {
    return await this.users
  }
}

export default UserRepository
