import jwt, { Jwt, JwtPayload } from 'jsonwebtoken'

import { ENV } from '../configs/env.config'
import { UnauthorizedException } from '../exceptions-application/exceptions'

type IPayloadSignToken = {
  id: string
  exp?: number
  iat?: number
}
type IDecodeToken = (Jwt | JwtPayload | string) & IPayloadSignToken

export class JwtAuth {
  private constructor() {}

  private static getExpireTime(secretType: 'access' | 'refresh'): number | string {
    return secretType === 'access' ? ENV.ACCESS_TOKEN_EXPIRES_IN : ENV.REFRESH_TOKEN_EXPIRES_IN
  }

  private static getSecret(secretType: 'access' | 'refresh'): string {
    return secretType === 'access' ? ENV.ACCESS_TOKEN_SECRET : ENV.REFRESH_TOKEN_SECRET
  }

  public static generateToken = (
    payload: IPayloadSignToken,
    secretType: 'access' | 'refresh',
    options?: { expiresIn?: number | string },
  ): string => {
    const secret = this.getSecret(secretType)
    const expiresIn = options?.expiresIn ?? this.getExpireTime(secretType)
    return jwt.sign(payload, secret, { expiresIn })
  }

  public static verifyToken(token: string, secretType: 'access' | 'refresh'): IDecodeToken {
    const secret = this.getSecret(secretType)
    try {
      const decoded = jwt.verify(token, secret) as IDecodeToken
      return decoded
    } catch (error) {
      throw new UnauthorizedException('Token is invalid or expired')
    }
  }

  public static decodeToken(token: string): IDecodeToken {
    const decoded = jwt.decode(token) as IDecodeToken
    return decoded
  }
}
