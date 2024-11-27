import { UserEntity } from '../user.entity'

interface IUserRepository {
  addUser(user: UserEntity): void
  getUserById(id: UserEntity['id']): UserEntity | undefined
  getAllUsers(): UserEntity[]
}

export default IUserRepository
