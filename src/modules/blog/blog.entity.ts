import { TagEntity } from '../tag/tag.entity'
import { UserEntity } from '../user/user.entity'
import { AbstractBlogEntityBase } from './blog.entity-base'

export class BlogEntity extends AbstractBlogEntityBase {
  private _title: string
  private _description: string
  private _content: string
  private _author: UserEntity
  private _tags: TagEntity[]
  private _draft: boolean

  constructor(title: string, description: string, content: string) {
    super()
    this._title = title
    this._description = description
    this._content = content
    this._draft = true
  }

  public get title(): string {
    return this._title
  }
  public get description(): string {
    return this._description
  }
  public get content(): string {
    return this._content
  }

  public get draft(): boolean {
    return this._draft
  }

  public get author(): UserEntity {
    return this._author
  }

  public get tags(): TagEntity[] {
    return this._tags
  }

  public assignAuthor(author: UserEntity): void {
    this._author = author
  }
  public assignTags(tags: TagEntity[]): void {
    this._tags = tags
  }

  public publish(): void {
    this._draft = false
  }

  public removeTag(tag: TagEntity): void {
    const index = this._tags.indexOf(tag)
    if (index >= 0) {
      this._tags.splice(index, 1)
    }
  }

  public toString(): string {
    return ''
  }
}
