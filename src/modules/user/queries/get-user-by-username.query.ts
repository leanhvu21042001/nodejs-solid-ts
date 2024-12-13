import { BadRequestException } from 'src/libs/exceptions/exceptions'

import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type GetUserByUsernameInput = {
  username: UserEntity['username']
}
export type GetUserByUsernameOutput = {
  id: UserEntity['id']
  password: UserEntity['password']
}

export class GetUserByUsernameQuery {
  constructor(private userRepository: IUserRepository) {}

  async execute(input: GetUserByUsernameInput): Promise<GetUserByUsernameOutput> {
    const user = await this.userRepository.getByUsername(input.username)

    if (!user) {
      throw new BadRequestException('User not found')
    }

    return {
      id: user.id,
      password: user.password,
    }
  }
}
