import IBookRepository from '../repositories/book.repository'
import NonFictionBookEntity from '../variants/non-fiction-book.entity'

export type CreateBookNonFictionCommandInput = {
  name: string
  authorName: string
  year: number
  price: number
}

export class CreateBookNonFictionCommand {
  constructor(private bookRepository: IBookRepository) {}

  async execute(book: CreateBookNonFictionCommandInput) {
    const newBook = new NonFictionBookEntity(book.name, book.authorName, book.year, book.price)
    return await this.bookRepository.addBook(newBook)
  }
}
