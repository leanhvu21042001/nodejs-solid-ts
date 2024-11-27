import {
  createBookCommand,
  createFictionBookCommand,
  createNonFictionBookCommand,
  getAllBooksQuery,
} from './book/booking.di'

async function main() {
  createBookCommand.execute({
    name: 'The Great Gatsby',
    authorName: 'F. Scott Fitzgerald',
    year: 1925,
    price: 15,
  })

  createFictionBookCommand.execute({
    name: 'Harry Potter',
    authorName: 'F. Scott Fitzgerald',
    year: 1997,
    price: 20,
  })

  createNonFictionBookCommand.execute({
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    authorName: 'Héctor García and Francesc Miralles',
    year: 2016,
    price: 30,
  })

  const allBooks = await getAllBooksQuery.execute()

  allBooks.forEach((book) => {
    console.log(`${book.toString()}\n`)
  })
}

main()
