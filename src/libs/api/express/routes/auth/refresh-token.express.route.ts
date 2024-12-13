import { JwtAuth } from 'src/libs/auth-provider/jwt.auth-provider'
import { PasswordAuth } from 'src/libs/auth-provider/password.auth-provider'
import { UnauthorizedException } from 'src/libs/exceptions/exceptions'
import {
  CreateUserCommand,
  CreateUserCommandInput,
  CreateUserCommandOutput,
} from 'src/modules/user/commands/create-user.command'
import {
  GetUserByUsernameInput,
  GetUserByUsernameOutput,
  GetUserByUsernameQuery,
} from 'src/modules/user/queries/get-user-by-username.query'

import { HttpMethod, IRouteExpress, TExpressRequest, TExpressResponse } from '../route.express.interface'

export type LoginAuthResponseDto = {
  accessToken: string
  refreshToken: string
}

export class LoginAuthExpressRoute implements IRouteExpress {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly getUserByUsernameService: GetUserByUsernameQuery,
  ) {}

  public static create(getUserByUsernameService: GetUserByUsernameQuery): LoginAuthExpressRoute {
    return new LoginAuthExpressRoute('/register', HttpMethod.POST, getUserByUsernameService)
  }

  public getHandler(): (request: TExpressRequest, response: TExpressResponse) => Promise<void> {
    return async (request: TExpressRequest, response: TExpressResponse) => {
      const { username, password } = request.body

      const input: GetUserByUsernameInput = {
        username,
      }
      const output: GetUserByUsernameOutput = await this.getUserByUsernameService.execute(input)

      const isPasswordValid = await PasswordAuth.comparePassword(password, output.password)
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid username or password')
      }

      const responseBody = this.present(output)
      response.status(200).send(responseBody)
    }
  }

  public getPath(): string {
    return this.path
  }
  public getMethod(): HttpMethod {
    return this.method
  }
  private present(input: GetUserByUsernameOutput): LoginAuthResponseDto {
    const accessToken = JwtAuth.generateToken({ id: input.id }, 'access')
    const refreshToken = JwtAuth.generateToken({ id: input.id }, 'refresh')

    const response = {
      accessToken,
      refreshToken,
    }
    return response
  }
}
