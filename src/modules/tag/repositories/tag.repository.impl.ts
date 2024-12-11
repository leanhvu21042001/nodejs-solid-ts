import { DatabaseProvider } from 'src/libs/database/database-provider'

import { TagEntity } from '../tag.entity'
import ITagRepository from './tag.repository'

export class TagRepository implements ITagRepository {
  private tags: TagEntity[]

  constructor() {
    this.tags = DatabaseProvider.getModel<TagEntity>('tags')
  }

  async add(tag: TagEntity): Promise<void> {
    this.tags.push(tag)
  }
  async delete(id: TagEntity['id']): Promise<void> {
    this.tags = this.tags.filter((tag) => tag.id !== id)
  }
  async update(tag: TagEntity): Promise<void> {
    this.tags = this.tags.map((t) => (t.id === tag.id ? tag : t))
  }
  async findById(id: TagEntity['id']): Promise<TagEntity | undefined> {
    return this.tags.find((tag) => tag.id === id)
  }
  async findAll(): Promise<TagEntity[]> {
    return this.tags
  }
}
