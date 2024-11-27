import { BookEntity } from '../book.entity'
import IBookRepository from './book.repository'

const books: BookEntity[] = []
class BookRepository implements IBookRepository {
  private books: BookEntity[]

  constructor() {
    this.books = books
  }
  getBookById(id: BookEntity['id']): BookEntity | undefined {
    return this.books.find((book) => book.id === id)
  }

  addBook(book: BookEntity): void {
    this.books.push(book)
  }
  getAllBooks(): BookEntity[] {
    return this.books
  }
}

export default BookRepository
