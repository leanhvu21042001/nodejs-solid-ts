import { BlogEntity } from '../blog.entity'

interface IBlogRepository {
  add(blog: BlogEntity): Promise<BlogEntity['id']>
  delete(id: BlogEntity['id']): Promise<void>
  update(blog: BlogEntity): Promise<void>
  findById(id: BlogEntity['id']): Promise<BlogEntity | undefined>
  findAll(): Promise<BlogEntity[]>
}

export default IBlogRepository
