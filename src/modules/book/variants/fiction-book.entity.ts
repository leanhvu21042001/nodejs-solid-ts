import { BookEntity } from '../book.entity'

class FictionBookEntity extends BookEntity {
  getType(): string {
    return 'Fiction Book'
  }
}

export default FictionBookEntity
