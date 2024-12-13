import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type CreateUserCommandInput = {
  name: string
  age: number
}

export class CreateUserCommand {
  constructor(private userRepository: IUserRepository) {}

  async execute(userInput: CreateUserCommandInput) {
    const newUser = new UserEntity(userInput.name, userInput.age)
    return await this.userRepository.addUser(newUser)
  }
}
