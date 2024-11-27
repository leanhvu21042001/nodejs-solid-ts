import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type GetUserByIDInput = {
  id: UserEntity['id']
}

export class GetUserByIDQuery {
  constructor(private userRepository: IUserRepository) {}

  execute(input: GetUserByIDInput) {
    return this.userRepository.getUserById(input.id)
  }
}
