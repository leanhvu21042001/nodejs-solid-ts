type ModelName = 'books' | 'users' | 'tags' | 'blogs'

export class DatabaseProvider {
  private static books = []
  private static users = []
  private static tags = []
  private static blogs = []

  public static getModel<ModalType>(modelName: ModelName): ModalType[] {
    if (modelName === 'books') {
      return this.books
    } else if (modelName === 'users') {
      return this.users
    } else if (modelName === 'tags') {
      return this.tags
    } else if (modelName === 'blogs') {
      return this.blogs
    } else {
      throw new Error('Invalid model name')
    }
  }
}
