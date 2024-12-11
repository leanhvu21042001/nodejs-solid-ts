import UserRepository from 'src/modules/user/repositories/user.repository.impl'

import { CreateBookWithAuthorCommand } from '../../modules/book/commands/create-book-with-author.command'
import { CreateBookCommand } from '../../modules/book/commands/create-book.command'
import { CreateBookFictionCommand } from '../../modules/book/commands/create-fiction-book.command'
import { CreateBookNonFictionCommand } from '../../modules/book/commands/create-non-fiction-book.command'
import { GetAllBooksQuery } from '../../modules/book/queries/get-all-book.query'
import BookRepository from '../../modules/book/repositories/book.repository.impl'

const bookRepository = new BookRepository()
const userRepository = new UserRepository()

const BookDI = {
  createBookCommand: new CreateBookCommand(bookRepository),
  createFictionBookCommand: new CreateBookFictionCommand(bookRepository),
  createNonFictionBookCommand: new CreateBookNonFictionCommand(bookRepository),
  createBookWithAuthorCommand: new CreateBookWithAuthorCommand(bookRepository, userRepository),
  getAllBooksQuery: new GetAllBooksQuery(bookRepository),
}

export { BookDI }
