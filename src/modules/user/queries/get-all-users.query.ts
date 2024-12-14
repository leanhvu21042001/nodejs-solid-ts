import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type GetAllUsersQueryInput = void
export type GetAllUsersQueryOutput = UserEntity[]

export class GetAllUsersQuery {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<GetAllUsersQueryOutput> {
    return await this.userRepository.getAll()
  }
}
