import { BadRequestException } from 'src/libs/exceptions-application/exceptions'
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

export type CreateBlogCommandOutput = {
  id: BlogEntity['id']
}

export class CreateBlogCommand {
  constructor(
    private blogRepository: IBlogRepository,
    private tagRepository: ITagRepository,
    private userRepository: IUserRepository,
  ) {}

  async execute(input: CreateBlogCommandInput): Promise<CreateBlogCommandOutput> {
    const author = await this.userRepository.getById(input.authorId)

    if (!author) {
      throw new BadRequestException('Invalid author ID')
    }

    let tags = await this.tagRepository.findAll()
    tags = tags.filter((tag) => input.tagIDs.includes(tag.id))

    if (!tags.length) {
      throw new BadRequestException('Invalid tag IDs')
    }

    const newBlog = new BlogEntity(input.title, input.description, input.content)
    newBlog.assignAuthor(author)
    newBlog.assignTags(tags)

    const id = await this.blogRepository.add(newBlog)

    return {
      id,
    }
  }
}
