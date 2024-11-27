import { BookEntity } from '../book.entity'
import IBookRepository from './book.repository'

class BookRepository implements IBookRepository {
  private books: BookEntity[]

  constructor() {
    this.books = []
  }

  addBook(book: BookEntity): void {
    this.books.push(book)
  }
  getAllBooks(): BookEntity[] {
    return this.books
  }
}

export default BookRepository
