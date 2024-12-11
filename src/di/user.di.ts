import { CreateUserCommand } from '../modules/user/commands/create-user.command'
import { GetAllUsersQuery } from '../modules/user/queries/get-all-users.query'
import { GetUserByIDQuery } from '../modules/user/queries/get-user-by-id.query'
import UserRepository from '../modules/user/repositories/user.repository.impl'

const userRepository = new UserRepository()

const UserDI = {
  createUserCommand: new CreateUserCommand(userRepository),
  getAllUsersQuery: new GetAllUsersQuery(userRepository),
  getUserByIDQuery: new GetUserByIDQuery(userRepository),
}

export { UserDI }
