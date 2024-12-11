import { UserEntity } from '../user.entity'

interface IUserRepository {
  addUser(user: UserEntity): Promise<void>
  getUserById(id: UserEntity['id']): Promise<UserEntity | undefined>
  getAllUsers(): Promise<UserEntity[]>
}

export default IUserRepository
