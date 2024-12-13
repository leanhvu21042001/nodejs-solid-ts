import { BookEntity } from '../book.entity'
import IBookRepository from '../repositories/book.repository'

export type CreateBookCommandInput = {
  name: string
  year: number
  price: number
}

export class CreateBookCommand {
  constructor(private bookRepository: IBookRepository) {}

  async execute(book: CreateBookCommandInput) {
    const newBook = new BookEntity(book.name, book.year, book.price)
    return await this.bookRepository.addBook(newBook)
  }
}
