import IUserRepository from '../repositories/user.repository'

export class GetAllUsersQuery {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return await this.userRepository.getAllUsers()
  }
}
