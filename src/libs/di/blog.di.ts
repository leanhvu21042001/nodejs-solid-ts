import { CreateBlogCommand } from 'src/modules/blog/commands/create-blog.command'
import { DeleteBlogCommand } from 'src/modules/blog/commands/delete-blog.command'
import { UpdateBlogCommand } from 'src/modules/blog/commands/update-blog.command'
import { GetAllBlogQuery } from 'src/modules/blog/queries/get-all-blog.query'
import { GetBlogByIDQuery } from 'src/modules/blog/queries/get-blog-by-id.query'
import { BlogRepository } from 'src/modules/blog/repositories/blog.repository.impl'
import { TagRepository } from 'src/modules/tag/repositories/tag.repository.impl'
import UserRepository from 'src/modules/user/repositories/user.repository.impl'

const blogRepository = new BlogRepository()
const tagRepository = new TagRepository()
const userRepository = new UserRepository()

const BLogDI = {
  createBlogCommand: new CreateBlogCommand(blogRepository, tagRepository, userRepository),
  deleteBlogCommand: new DeleteBlogCommand(blogRepository),
  updateBlogCommand: new UpdateBlogCommand(blogRepository, tagRepository),
  getBlogByIDQuery: new GetBlogByIDQuery(blogRepository),
  getAllBlogQuery: new GetAllBlogQuery(blogRepository),
}

export { BLogDI }
