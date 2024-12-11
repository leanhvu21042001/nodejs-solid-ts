export type AggregateBookID = string

export abstract class AbstractTagEntityBase {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date

  protected constructor() {
    const id = crypto.randomUUID()
    const createdAt = new Date()
    const updatedAt = new Date()

    this._id = id
    this._createdAt = createdAt
    this._updatedAt = updatedAt
  }

  public setId(id: AbstractTagEntityBase['_id']): void {
    this._id = id
  }

  public get id(): string {
    return this._id
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }

  public toString(): string {
    const str: string = `TagEntityBase: ${this.id}`
    return str
  }
}
