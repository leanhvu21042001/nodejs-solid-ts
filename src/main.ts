import { BookDI } from './modules/book/booking.di'
import { UserDI } from './modules/user/user.di'

async function main() {
  BookDI.createBookCommand.execute({
    name: 'The Great Gatsby',
    year: 1925,
    price: 15,
  })

  BookDI.createFictionBookCommand.execute({
    name: 'Harry Potter',
    year: 1997,
    price: 20,
  })

  BookDI.createNonFictionBookCommand.execute({
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    year: 2016,
    price: 30,
  })

  BookDI.createBookWithAuthorCommand.execute({
    name: 'The Great LAVDEV BOOK',
    year: 2024,
    price: 15,
    authorName: 'LAVDEV',
    authorAge: 65,
  })
  const allBooks = BookDI.getAllBooksQuery.execute()

  allBooks.forEach((book) => {
    console.log(`${book.toString()}\n`)
  })
}

main()
