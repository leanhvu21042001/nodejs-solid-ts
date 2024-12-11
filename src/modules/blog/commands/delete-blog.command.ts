import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type DeleteBlogCommandInput = {
  id: BlogEntity['id']
}

export class DeleteBlogCommand {
  constructor(private blogRepository: IBlogRepository) {}

  execute(input: DeleteBlogCommandInput) {
    const blog = this.blogRepository.findById(input.id)
    if (!blog) {
      throw new Error('Blog not found')
    }

    return this.blogRepository.delete(blog.id)
  }
}
