import { UserEntity } from '../user.entity'

interface IUserRepository {
  add(user: UserEntity): Promise<UserEntity['id']>
  getById(id: UserEntity['id']): Promise<UserEntity | undefined>
  getByUsername(username: UserEntity['username']): Promise<UserEntity | undefined>
  getAll(): Promise<UserEntity[]>
}

export default IUserRepository
