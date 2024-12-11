import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type PublishBlogCommandInput = {
  id: BlogEntity['id']
}

export class PublishBlogCommand {
  constructor(private blogRepository: IBlogRepository) {}

  execute(input: PublishBlogCommandInput) {
    const blog = this.blogRepository.findById(input.id)
    if (!blog) {
      throw new Error('Blog not found')
    }

    blog.publish()

    return this.blogRepository.update(blog)
  }
}
