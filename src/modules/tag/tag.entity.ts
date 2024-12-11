import { AbstractTagEntityBase } from './tag.entity-base'

export class TagEntity extends AbstractTagEntityBase {
  private _title: string

  constructor(title: string) {
    super()
    this._title = title
  }

  public get title(): string {
    return this._title
  }

  public toString(): string {
    return ''
  }
}
