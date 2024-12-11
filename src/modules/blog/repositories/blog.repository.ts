import { BlogEntity } from '../blog.entity'

interface IBlogRepository {
  add(blog: BlogEntity): void
  delete(id: BlogEntity['id']): void
  update(blog: BlogEntity): void
  findById(id: BlogEntity['id']): BlogEntity | undefined
  findAll(): BlogEntity[]
}

export default IBlogRepository
