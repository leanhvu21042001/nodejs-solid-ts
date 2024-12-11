import IBlogRepository from '../repositories/blog.repository'

export class GetAllBlogQuery {
  constructor(private blogRepository: IBlogRepository) {}

  execute() {
    return this.blogRepository.findAll()
  }
}
