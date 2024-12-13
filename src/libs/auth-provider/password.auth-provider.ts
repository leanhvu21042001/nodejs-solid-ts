import bcrypt from 'bcrypt'

export class PasswordAuth {
  private static saltOrRounds = 10

  private constructor() {}

  public static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltOrRounds)
  }

  public static async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
