import { DatabaseProvider } from 'src/libs/database/database-provider'

import { BlogEntity } from '../blog.entity'
import IBlogRepository from './blog.repository'

export class BlogRepository implements IBlogRepository {
  private blogs: BlogEntity[]

  constructor() {
    this.blogs = DatabaseProvider.getModel<BlogEntity>('blogs')
  }

  add(blog: BlogEntity): void {
    this.blogs.push(blog)
  }
  delete(id: BlogEntity['id']): void {
    this.blogs = this.blogs.filter((blog) => blog.id !== id)
  }
  update(blog: BlogEntity): void {
    this.blogs = this.blogs.map((bl) => (bl.id === blog.id ? blog : bl))
  }
  findById(id: BlogEntity['id']): BlogEntity | undefined {
    return this.blogs.find((blog) => blog.id === id)
  }
  findAll(): BlogEntity[] {
    return this.blogs
  }
}
