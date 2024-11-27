import IBookRepository from '../repositories/book.repository'
import NonFictionBookEntity from '../variants/non-fiction-book.entity'

export type CreateBookNonFictionCommandInput = {
  name: string
  year: number
  price: number
}

export class CreateBookNonFictionCommand {
  constructor(private bookRepository: IBookRepository) {}

  execute(book: CreateBookNonFictionCommandInput) {
    const newBook = new NonFictionBookEntity(book.name, book.year, book.price)
    return this.bookRepository.addBook(newBook)
  }
}
