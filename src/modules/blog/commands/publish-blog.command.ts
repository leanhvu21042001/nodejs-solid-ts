import { BadRequestException } from 'src/libs/exceptions-application/exceptions'

import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type PublishBlogCommandInput = {
  id: BlogEntity['id']
}

export class PublishBlogCommand {
  constructor(private blogRepository: IBlogRepository) {}

  async execute(input: PublishBlogCommandInput) {
    const blog = await this.blogRepository.findById(input.id)
    if (!blog) {
      throw new BadRequestException('Blog not found')
    }

    blog.publish()

    return this.blogRepository.update(blog)
  }
}
