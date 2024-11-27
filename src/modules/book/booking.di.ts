import UserRepository from 'src/modules/user/repositories/user.repository.impl'

import { CreateBookWithAuthorCommand } from './commands/create-book-with-author.command'
import { CreateBookCommand } from './commands/create-book.command'
import { CreateBookFictionCommand } from './commands/create-fiction-book.command'
import { CreateBookNonFictionCommand } from './commands/create-non-fiction-book.command'
import { GetAllBooksQuery } from './queries/get-all-book.query'
import BookRepository from './repositories/book.repository.impl'

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
