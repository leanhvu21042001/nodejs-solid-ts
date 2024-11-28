import { DatabaseProvider } from 'src/libs/database/database-provider'

import { BookEntity } from '../book.entity'
import IBookRepository from './book.repository'

class BookRepository implements IBookRepository {
  private books: BookEntity[]

  constructor() {
    this.books = DatabaseProvider.getModel<BookEntity>('books')
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
