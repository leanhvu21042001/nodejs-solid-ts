import { CreateBookCommand } from './commands/create-book.command'
import { CreateBookFictionCommand } from './commands/create-fiction-book.command'
import { CreateBookNonFictionCommand } from './commands/create-non-fiction-book.command'
import { GetAllBooksQuery } from './queries/get-all-book'
import BookRepository from './repositories/book.repository.impl'

const bookRepository = new BookRepository()

export const createBookCommand = new CreateBookCommand(bookRepository)
export const createFictionBookCommand = new CreateBookFictionCommand(bookRepository)
export const createNonFictionBookCommand = new CreateBookNonFictionCommand(bookRepository)
export const getAllBooksQuery = new GetAllBooksQuery(bookRepository)
