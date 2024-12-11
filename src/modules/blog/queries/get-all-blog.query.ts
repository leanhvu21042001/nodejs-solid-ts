import IBlogRepository from '../repositories/blog.repository'

export class GetAllBlogQuery {
  constructor(private blogRepository: IBlogRepository) {}

  async execute() {
    return await this.blogRepository.findAll()
  }
}
