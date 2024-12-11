import { DatabaseProvider } from 'src/libs/database/database-provider'

import { BlogEntity } from '../blog.entity'
import IBlogRepository from './blog.repository'

export class BlogRepository implements IBlogRepository {
  private blogs: BlogEntity[]

  constructor() {
    this.blogs = DatabaseProvider.getModel<BlogEntity>('blogs')
  }

  async add(blog: BlogEntity): Promise<void> {
    this.blogs.push(blog)
  }
  async delete(id: BlogEntity['id']): Promise<void> {
    this.blogs = this.blogs.filter((blog) => blog.id !== id)
  }
  async update(blog: BlogEntity): Promise<void> {
    this.blogs = this.blogs.map((bl) => (bl.id === blog.id ? blog : bl))
  }
  async findById(id: BlogEntity['id']): Promise<BlogEntity | undefined> {
    return this.blogs.find((blog) => blog.id === id)
  }
  async findAll(): Promise<BlogEntity[]> {
    return this.blogs
  }
}
