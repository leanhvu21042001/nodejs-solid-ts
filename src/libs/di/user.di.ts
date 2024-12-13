import { CreateUserCommand } from 'src/modules/user/commands/create-user.command'
import { GetAllUsersQuery } from 'src/modules/user/queries/get-all-users.query'
import { GetUserByIDQuery } from 'src/modules/user/queries/get-user-by-id.query copy'
import { GetUserByUsernameQuery } from 'src/modules/user/queries/get-user-by-username.query'
import UserRepository from 'src/modules/user/repositories/user.repository.impl'

const userRepository = new UserRepository()

const UserDI = {
  createUserCommand: new CreateUserCommand(userRepository),
  getAllUsersQuery: new GetAllUsersQuery(userRepository),
  getUserByIDQuery: new GetUserByIDQuery(userRepository),
  GetUserByUsernameQuery: new GetUserByUsernameQuery(userRepository),
}

export { UserDI }
