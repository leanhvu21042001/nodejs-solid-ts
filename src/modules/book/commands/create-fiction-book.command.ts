import IBookRepository from '../repositories/book.repository'
import FictionBookEntity from '../variants/fiction-book.entity'

export type CreateBookFictionCommandInput = {
  name: string
  year: number
  price: number
}

export class CreateBookFictionCommand {
  constructor(private bookRepository: IBookRepository) {}

  async execute(book: CreateBookFictionCommandInput) {
    const newBook = new FictionBookEntity(book.name, book.year, book.price)
    return await this.bookRepository.addBook(newBook)
  }
}
