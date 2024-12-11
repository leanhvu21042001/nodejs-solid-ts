import { DatabaseProvider } from 'src/libs/database/database-provider'

import { TagEntity } from '../tag.entity'
import ITagRepository from './tag.repository'

export class TagRepository implements ITagRepository {
  private tags: TagEntity[]

  constructor() {
    this.tags = DatabaseProvider.getModel<TagEntity>('tags')
  }

  add(tag: TagEntity): void {
    this.tags.push(tag)
  }
  delete(id: TagEntity['id']): void {
    this.tags = this.tags.filter((tag) => tag.id !== id)
  }
  update(tag: TagEntity): void {
    this.tags = this.tags.map((t) => (t.id === tag.id ? tag : t))
  }
  findById(id: TagEntity['id']): TagEntity | undefined {
    return this.tags.find((tag) => tag.id === id)
  }
  findAll(): TagEntity[] {
    return this.tags
  }
}
