import IUserRepository from '../repositories/user.repository'
import { UserEntity } from '../user.entity'

export type CreateUserCommandInput = {
  name: string
  age: number
}

export class CreateUserCommand {
  constructor(private userRepository: IUserRepository) {}

  execute(userInput: CreateUserCommandInput) {
    const newUser = new UserEntity(userInput.name, userInput.age)
    return this.userRepository.addUser(newUser)
  }
}
