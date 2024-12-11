import { BlogEntity } from 'src/modules/blog/blog.entity'
import { GetAllBlogQuery } from 'src/modules/blog/queries/get-all-blog.query'

import { HttpMethod, IRouteExpress, TExpressRequest, TExpressResponse } from '../route.express.interface'

export type ListBlogResponseDto = {
  blogs: Array<BlogEntity>
}

export class ListBlogRouteExpress implements IRouteExpress {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly getAllBlogQuery: GetAllBlogQuery,
  ) {}

  public static create(getAllBlogQuery: GetAllBlogQuery): ListBlogRouteExpress {
    return new ListBlogRouteExpress('/products', HttpMethod.GET, getAllBlogQuery)
  }

  getHandler(): (request: TExpressRequest, response: TExpressResponse) => Promise<void> {
    return async (request: TExpressRequest, response: TExpressResponse) => {
      const output = await this.getAllBlogQuery.execute()
      const responseBody = this.present(output)

      response.status(200).json(responseBody).send()
    }
  }
  getPath(): string {
    return this.path
  }
  getMethod(): HttpMethod {
    return this.method
  }

  private present(blogs: Array<BlogEntity>): ListBlogResponseDto {
    const response: ListBlogResponseDto = {
      blogs,
    }

    return response
  }
}
