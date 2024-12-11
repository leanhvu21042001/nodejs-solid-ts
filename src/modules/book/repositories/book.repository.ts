import { BookEntity } from '../book.entity'

interface IBookRepository {
  addBook(book: BookEntity): Promise<void>
  getAllBooks(): Promise<BookEntity[]>
  getBookById(id: BookEntity['id']): Promise<BookEntity | undefined>
}

export default IBookRepository
