import IUserRepository from 'src/modules/user/repositories/user.repository'
import { UserEntity } from 'src/modules/user/user.entity'

import { BookEntity } from '../book.entity'
import IBookRepository from '../repositories/book.repository'

export type CreateBookWithAuthorCommandInput = {
  name: string
  year: number
  price: number
  authorName: string
  authorAge: number
}

export class CreateBookWithAuthorCommand {
  constructor(
    private bookRepository: IBookRepository,
    private userRepository: IUserRepository,
  ) {}

  execute(book: CreateBookWithAuthorCommandInput) {
    const author = new UserEntity(book.authorName, book.authorAge)
    this.userRepository.addUser(author)

    const newBook = new BookEntity(book.name, book.year, book.price, author)
    return this.bookRepository.addBook(newBook)
  }
}
