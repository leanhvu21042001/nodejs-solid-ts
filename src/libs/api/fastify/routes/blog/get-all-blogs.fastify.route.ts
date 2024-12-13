import { BlogEntity } from 'src/modules/blog/blog.entity'
import { GetAllBlogQuery, GetAllBlogQueryOutput } from 'src/modules/blog/queries/get-all-blog.query'

import { HttpMethod, IRouteFastify, TFastifyRequest, TFastifyResponse } from '../route.fastify.interface'

export type GetAllBlogResponseDto = {
  blogs: Array<{
    id: BlogEntity['id']
    title: BlogEntity['title']
    description: BlogEntity['description']
    content: BlogEntity['content']
    author: BlogEntity['author']
    tags: BlogEntity['tags']
    draft: BlogEntity['draft']
    createdAt: BlogEntity['createdAt']
    updatedAt: BlogEntity['updatedAt']
  }>
}

export class GetAllBlogExpressRoute implements IRouteFastify {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly getAllBlogQuery: GetAllBlogQuery,
  ) {}

  public static create(getAllBlogQuery: GetAllBlogQuery): GetAllBlogExpressRoute {
    return new GetAllBlogExpressRoute('/blogs', HttpMethod.GET, getAllBlogQuery)
  }

  getHandler(): (request: TFastifyRequest, response: TFastifyResponse) => Promise<void> {
    return async (request: TFastifyRequest, response: TFastifyResponse) => {
      const output = await this.getAllBlogQuery.execute()
      const responseBody = this.present(output)

      response.status(200).send(responseBody)
    }
  }
  getPath(): string {
    return this.path
  }
  getMethod(): HttpMethod {
    return this.method
  }

  private present(input: GetAllBlogQueryOutput): GetAllBlogResponseDto {
    const response: GetAllBlogResponseDto = {
      blogs: input.blogs,
    }

    return response
  }
}
