import { BadRequestException } from 'src/libs/exceptions-application/exceptions'

import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type CreateUserCommandInput = {
  name: UserEntity['name']
  age: UserEntity['age']
  username: UserEntity['username']
  password: UserEntity['password']
}

export type CreateUserCommandOutput = {
  id: UserEntity['id']
}

export class CreateUserCommand {
  constructor(private userRepository: IUserRepository) {}

  async execute(input: CreateUserCommandInput): Promise<CreateUserCommandOutput> {
    const userFound = await this.userRepository.getByUsername(input.username)
    if (userFound) {
      throw new BadRequestException('Username already exists')
    }

    const newUser = new UserEntity(input.name, input.age)
    newUser.setUsername(input.username)
    newUser.setPassword(input.password)

    const idUserCreated = await this.userRepository.add(newUser)

    return {
      id: idUserCreated,
    }
  }
}
