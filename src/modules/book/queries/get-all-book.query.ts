import IBookRepository from '../repositories/book.repository'

export class GetAllBooksQuery {
  constructor(private bookRepository: IBookRepository) {}

  execute() {
    return this.bookRepository.getAllBooks()
  }
}
