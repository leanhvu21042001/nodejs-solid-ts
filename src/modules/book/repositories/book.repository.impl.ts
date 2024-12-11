import { DatabaseProvider } from 'src/libs/database/database-provider'

import { BookEntity } from '../book.entity'
import IBookRepository from './book.repository'

class BookRepository implements IBookRepository {
  private books: BookEntity[]

  constructor() {
    this.books = DatabaseProvider.getModel<BookEntity>('books')
  }
  async getBookById(id: BookEntity['id']): Promise<BookEntity | undefined> {
    return this.books.find((book) => book.id === id)
  }

  async addBook(book: BookEntity): Promise<void> {
    this.books.push(book)
  }
  async getAllBooks(): Promise<BookEntity[]> {
    return this.books
  }
}

export default BookRepository
