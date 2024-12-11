import ITagRepository from 'src/modules/tag/repositories/tag.repository'
import { TagEntity } from 'src/modules/tag/tag.entity'
import { UserEntity } from 'src/modules/user/user.entity'

import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type UpdateBlogCommandInput = {
  id: BlogEntity['id']
  title: BlogEntity['title']
  description: BlogEntity['description']
  content: BlogEntity['content']
  authorId: UserEntity['id']
  tagIDs: Array<TagEntity['id']>
}

export class UpdateBlogCommand {
  constructor(
    private blogRepository: IBlogRepository,
    private tagRepository: ITagRepository,
  ) {}

  execute(input: UpdateBlogCommandInput) {
    const tags = this.tagRepository.findAll().filter((tag) => input.tagIDs.includes(tag.id))
    if (!tags.length) {
      throw new Error('Invalid tag IDs')
    }

    const blogFound = this.blogRepository.findById(input.id)
    if (!blogFound) {
      throw new Error('Blog not found')
    }

    const newBlog = new BlogEntity(input.title, input.description, input.content)
    newBlog.assignAuthor(blogFound.author)
    newBlog.assignTags(tags)

    return this.blogRepository.update(newBlog)
  }
}
