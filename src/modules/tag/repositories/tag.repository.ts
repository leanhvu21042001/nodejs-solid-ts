import { TagEntity } from '../tag.entity'

interface ITagRepository {
  add(tag: TagEntity): void
  delete(id: TagEntity['id']): void
  update(tag: TagEntity): void
  findById(id: TagEntity['id']): TagEntity | undefined
  findAll(): TagEntity[]
}

export default ITagRepository
