import { JwtAuth } from 'src/libs/auth-provider/jwt.auth-provider'
import { PasswordAuth } from 'src/libs/auth-provider/password.auth-provider'
import {
  CreateUserCommand,
  CreateUserCommandInput,
  CreateUserCommandOutput,
} from 'src/modules/user/commands/create-user.command'

import { HttpMethod, IRouteExpress, TExpressRequest, TExpressResponse } from '../route.express.interface'

export type RegisterAuthResponseDto = {
  accessToken: string
  refreshToken: string
}

export class RegisterAuthExpressRoute implements IRouteExpress {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly createUserService: CreateUserCommand,
  ) {}

  public static create(createUserService: CreateUserCommand): RegisterAuthExpressRoute {
    return new RegisterAuthExpressRoute('/register', HttpMethod.POST, createUserService)
  }

  public getHandler(): (request: TExpressRequest, response: TExpressResponse) => Promise<void> {
    return async (request: TExpressRequest, response: TExpressResponse) => {
      const { name, age, username, password } = request.body

      //   handle data before create user
      const hashedPassword = await PasswordAuth.hashPassword(password)

      const input: CreateUserCommandInput = {
        name,
        age,
        username,
        password: hashedPassword,
      }

      const output: CreateUserCommandOutput = await this.createUserService.execute(input)
      const responseBody = this.present(output)
      response.status(201).send(responseBody)
    }
  }

  public getPath(): string {
    return this.path
  }
  public getMethod(): HttpMethod {
    return this.method
  }
  private present(input: CreateUserCommandOutput): RegisterAuthResponseDto {
    // handle data for response to client
    const accessToken = JwtAuth.generateToken({ id: input.id }, 'access')
    const refreshToken = JwtAuth.generateToken({ id: input.id }, 'refresh')

    const response = {
      accessToken,
      refreshToken,
    }
    return response
  }
}
