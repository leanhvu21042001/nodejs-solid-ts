import { UserEntity } from 'src/modules/user/user.entity'

import { AbstractBookEntityBase } from './book.entity-base'

export class BookEntity extends AbstractBookEntityBase {
  private _name: string
  private _year: number
  private _price: number
  private _author: UserEntity

  constructor(name: string, year: number, price: number, author?: UserEntity | undefined) {
    super()

    this._name = name
    this._year = year
    this._price = price
    this.setAuthor(author)
  }

  public get name(): string {
    return this._name
  }
  public get year(): number {
    return this._year
  }
  public get price(): number {
    return this._price
  }
  public get author(): UserEntity {
    return this._author
  }

  protected setAuthor(author: UserEntity | undefined): void {
    if (author) {
      this._author = author
    } else {
      const unknownAuthor = new UserEntity('Unknown', 0)
      this._author = unknownAuthor
    }
  }

  public getType(): string {
    return 'default'
  }

  public toString(): string {
    return `Book [${this.getType()}]: ${this._name} by ${this._author.name} (${this._year}) - ${this._price}$`
  }
}
