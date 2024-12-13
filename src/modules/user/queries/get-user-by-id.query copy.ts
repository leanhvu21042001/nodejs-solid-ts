import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type GetUserByIDInput = {
  id: UserEntity['id']
}

export class GetUserByIDQuery {
  constructor(private userRepository: IUserRepository) {}

  async execute(input: GetUserByIDInput) {
    return await this.userRepository.getById(input.id)
  }
}
