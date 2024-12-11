import ITagRepository from 'src/modules/tag/repositories/tag.repository'
import { TagEntity } from 'src/modules/tag/tag.entity'
import IUserRepository from 'src/modules/user/repositories/user.repository'
import { UserEntity } from 'src/modules/user/user.entity'

import { BlogEntity } from '../blog.entity'
import IBlogRepository from '../repositories/blog.repository'

export type CreateBlogCommandInput = {
  title: BlogEntity['title']
  description: BlogEntity['description']
  content: BlogEntity['content']
  authorId: UserEntity['id']
  tagIDs: Array<TagEntity['id']>
}

export class CreateBlogCommand {
  constructor(
    private blogRepository: IBlogRepository,
    private tagRepository: ITagRepository,
    private userRepository: IUserRepository,
  ) {}

  execute(input: CreateBlogCommandInput) {
    const author = this.userRepository.getUserById(input.authorId)

    if (!author) {
      throw new Error('Invalid author ID')
    }

    const tags = this.tagRepository.findAll().filter((tag) => input.tagIDs.includes(tag.id))
    if (!tags.length) {
      throw new Error('Invalid tag IDs')
    }

    const newBlog = new BlogEntity(input.title, input.description, input.content)
    newBlog.assignAuthor(author)
    newBlog.assignTags(tags)

    return this.blogRepository.add(newBlog)
  }
}
