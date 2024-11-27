export type AggregateBookID = string

export abstract class AbstractBookBaseEntity {
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

  protected get id(): string {
    return this._id
  }

  protected get createdAt(): Date {
    return this._createdAt
  }

  protected get updatedAt(): Date {
    return this._updatedAt
  }

  protected abstract getType(): string

  protected toString(): string {
    const str: string = `${this.getType()}: ${this.id}`
    return str
  }
}
