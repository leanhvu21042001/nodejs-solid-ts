import { BookEntity } from '../book.entity'

interface IBookRepository {
  addBook(book: BookEntity): void
  getAllBooks(): BookEntity[]
  getBookById(id: BookEntity['id']): BookEntity | undefined
}

export default IBookRepository
