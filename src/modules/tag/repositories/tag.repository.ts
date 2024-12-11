import { TagEntity } from '../tag.entity'

interface ITagRepository {
  add(tag: TagEntity): Promise<void>
  delete(id: TagEntity['id']): Promise<void>
  update(tag: TagEntity): Promise<void>
  findById(id: TagEntity['id']): Promise<TagEntity | undefined>
  findAll(): Promise<TagEntity[]>
}

export default ITagRepository
