import IBookRepository from '../repositories/book.repository'
import FictionBookEntity from '../variants/fiction-book.entity'

export type CreateBookFictionCommandInput = {
  name: string
  year: number
  price: number
}

export class CreateBookFictionCommand {
  constructor(private bookRepository: IBookRepository) {}

  execute(book: CreateBookFictionCommandInput) {
    const newBook = new FictionBookEntity(book.name, book.year, book.price)
    return this.bookRepository.addBook(newBook)
  }
}
