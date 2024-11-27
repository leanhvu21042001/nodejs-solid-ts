import { BookEntity } from 'src/modules/book/book.entity'

import { AbstractUserEntityBase } from './user.entity-base'

export class UserEntity extends AbstractUserEntityBase {
  private _name: string
  private _age: number
  private _books: BookEntity[] // list book user own

  constructor(name: string, age: number) {
    super()
    this._name = name
    this._age = age
  }

  public get name(): string {
    return this._name
  }
  public get age(): number {
    return this._age
  }
  public get books(): BookEntity[] {
    return this._books
  }
  public setBooks(books: BookEntity[]): void {
    this._books = books
  }

  public toString(): string {
    return ''
  }
}
