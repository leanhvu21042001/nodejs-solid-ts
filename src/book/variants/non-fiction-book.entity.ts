import { BookEntity } from '../book.entity'

class NonFictionBookEntity extends BookEntity {
  getType(): string {
    return 'Non-Fiction Book'
  }
}

export default NonFictionBookEntity
