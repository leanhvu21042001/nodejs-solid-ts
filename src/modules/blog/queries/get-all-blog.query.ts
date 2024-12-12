import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type GetAllBlogQueryInput = void
export type GetAllBlogQueryOutput = {
  blogs: Array<BlogEntity>
}

export class GetAllBlogQuery {
  constructor(private blogRepository: IBlogRepository) {}

  async execute(): Promise<GetAllBlogQueryOutput> {
    const blogs = await this.blogRepository.findAll()

    return {
      blogs,
    }
  }
}
