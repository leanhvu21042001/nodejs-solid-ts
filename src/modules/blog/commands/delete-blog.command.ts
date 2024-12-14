import { BadRequestException } from 'src/libs/exceptions-application/exceptions'

import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type DeleteBlogCommandInput = {
  id: BlogEntity['id']
}

export class DeleteBlogCommand {
  constructor(private blogRepository: IBlogRepository) {}

  async execute(input: DeleteBlogCommandInput) {
    const blog = await this.blogRepository.findById(input.id)
    if (!blog) {
      throw new BadRequestException('Blog not found')
    }

    return this.blogRepository.delete(blog.id)
  }
}
