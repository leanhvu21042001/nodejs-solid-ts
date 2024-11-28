type ModelName = 'books' | 'users'

export class DatabaseProvider {
  private static books = []
  private static users = []

  public static getModel<ModalType>(modelName: ModelName): ModalType[] {
    if (modelName === 'books') {
      return this.books
    } else if (modelName === 'users') {
      return this.users
    } else {
      throw new Error('Invalid model name')
    }
  }
}
