import moment from 'moment'
import { JwtAuth } from 'src/libs/auth-provider/jwt.auth-provider'
import { UnauthorizedException } from 'src/libs/exceptions-application/exceptions'
import { GetUserByIDInput, GetUserByIDOutput, GetUserByIDQuery } from 'src/modules/user/queries/get-user-by-id.query'

import { HttpMethod, IRouteExpress, TExpressRequest, TExpressResponse } from '../route.express.interface'

// special check input request.body
export type RefreshTokenAuthInputDto = {
  accessToken: string
  refreshToken: string
}

export type RefreshTokenAuthResponseDto = {
  accessToken: string
  refreshToken: string
}

export class RefreshTokenExpressRoute implements IRouteExpress {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly getUserByIDService: GetUserByIDQuery,
  ) {}

  public static create(getUserByIDService: GetUserByIDQuery): RefreshTokenExpressRoute {
    return new RefreshTokenExpressRoute('/refresh-token', HttpMethod.POST, getUserByIDService)
  }

  public getHandler(): (request: TExpressRequest, response: TExpressResponse) => Promise<void> {
    return async (request: TExpressRequest, response: TExpressResponse) => {
      const { accessToken, refreshToken }: RefreshTokenAuthInputDto = request.body

      if (!accessToken) {
        throw new UnauthorizedException('Access token is missing')
      }
      if (!refreshToken) {
        throw new UnauthorizedException('Refresh token is missing')
      }

      // just need to verify refresh token, because accessToken is already verified before and it has expired
      const accessTokenVerified = JwtAuth.decodeToken(accessToken)
      const refreshTokenVerified = JwtAuth.verifyToken(refreshToken, 'refresh')

      // Compare should be equal of tokens
      const userByAccessToken: GetUserByIDOutput = await this.getUserByIDService.execute(accessTokenVerified)
      const userByRefreshToken: GetUserByIDOutput = await this.getUserByIDService.execute(refreshTokenVerified)
      if (!userByAccessToken?.id || !userByAccessToken.id || userByAccessToken?.id !== userByRefreshToken?.id) {
        throw new UnauthorizedException('Invalid access or refresh token')
      }

      const responseBody = this.present({
        id: userByAccessToken.id,
        exp: refreshTokenVerified.exp ?? 0,
      })
      response.status(200).send(responseBody)
    }
  }

  public getPath(): string {
    return this.path
  }
  public getMethod(): HttpMethod {
    return this.method
  }
  private present(input: GetUserByIDInput & { exp: number }): RefreshTokenAuthResponseDto {
    // Calculate refresh token expiration time
    const expirationDate = moment(((input.exp ?? 0) + 1) * 1000)
    const currentTime = moment.now()
    const refreshExpMilliseconds = expirationDate.diff(currentTime, 'milliseconds')

    // generate new access and refresh tokens
    const payload = { id: input.id }
    const accessTokenOutput = JwtAuth.generateToken(payload, 'access')
    const refreshTokenOutput = JwtAuth.generateToken(payload, 'refresh', { expiresIn: `${refreshExpMilliseconds}ms` })

    // prepare object response.
    const response = {
      accessToken: accessTokenOutput,
      refreshToken: refreshTokenOutput,
    }
    return response
  }
}
