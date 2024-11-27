import IUserRepository from '../repositories/user.repository'

export class GetAllUsersQuery {
  constructor(private userRepository: IUserRepository) {}

  execute() {
    return this.userRepository.getAllUsers()
  }
}
