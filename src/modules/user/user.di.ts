import { CreateUserCommand } from './commands/create-user.command'
import { GetAllUsersQuery } from './queries/get-all-users.query'
import { GetUserByIDQuery } from './queries/get-user-by-id.query'
import UserRepository from './repositories/user.repository.impl'

const userRepository = new UserRepository()

const UserDI = {
  createUserCommand: new CreateUserCommand(userRepository),
  getAllUsersQuery: new GetAllUsersQuery(userRepository),
  getUserByIDQuery: new GetUserByIDQuery(userRepository),
}

export { UserDI }
