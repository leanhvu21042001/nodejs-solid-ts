import { BookEntity } from '../book.entity'

interface IBookRepository {
  addBook(book: BookEntity): void
  getAllBooks(): BookEntity[]
}

export default IBookRepository
