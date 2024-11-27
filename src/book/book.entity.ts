import { AbstractBookBaseEntity } from './book.entity-base'

export class BookEntity extends AbstractBookBaseEntity {
  private _name: string
  private _authorName: string
  private _year: number
  private _price: number

  constructor(name: string, authorName: string, year: number, price: number) {
    super()
    this._name = name
    this._authorName = authorName
    this._year = year
    this._price = price
  }

  public get name(): string {
    return this._name
  }
  public get authorName(): string {
    return this._authorName
  }
  public get year(): number {
    return this._year
  }
  public get price(): number {
    return this._price
  }

  public getType(): string {
    return 'default'
  }

  public toString(): string {
    return `Book [${this.getType()}]: ${this._name} by ${this._authorName} (${this._year}) - ${this._price}$`
  }
}
