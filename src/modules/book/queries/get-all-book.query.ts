import IBookRepository from '../repositories/book.repository'

export class GetAllBooksQuery {
  constructor(private bookRepository: IBookRepository) {}

  async execute() {
    return await this.bookRepository.getAllBooks()
  }
}
