import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type GetBlogByIDInput = {
  id: BlogEntity['id']
}

export class GetBlogByIDQuery {
  constructor(private blogRepository: IBlogRepository) {}

  execute(input: GetBlogByIDInput) {
    return this.blogRepository.findById(input.id)
  }
}
