import { BlogEntity } from 'src/modules/blog/blog.entity'
import {
  CreateBlogCommand,
  CreateBlogCommandInput,
  CreateBlogCommandOutput,
} from 'src/modules/blog/commands/create-blog.command'

import { HttpMethod, IRouteExpress, TExpressRequest, TExpressResponse } from '../route.express.interface'

export type CreateBlogResponseDto = {
  id: BlogEntity['id']
}

export class CreateBlogRouteExpress implements IRouteExpress {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly createBlogService: CreateBlogCommand,
  ) {}

  public static create(createBlogService: CreateBlogCommand): CreateBlogRouteExpress {
    return new CreateBlogRouteExpress('/blogs', HttpMethod.POST, createBlogService)
  }

  public getHandler(): (request: TExpressRequest, response: TExpressResponse) => Promise<void> {
    return async (request: TExpressRequest, response: TExpressResponse) => {
      const { title, description, content, authorId, tagIDs } = request.body

      const input: CreateBlogCommandInput = {
        title,
        description,
        content,
        authorId,
        tagIDs,
      }

      const output: CreateBlogCommandOutput = await this.createBlogService.execute(input)
      const responseBody = this.present(output)
      response.status(201).json(responseBody).send()
    }
  }

  public getPath(): string {
    return this.path
  }
  public getMethod(): HttpMethod {
    return this.method
  }
  private present(input: CreateBlogCommandOutput): CreateBlogResponseDto {
    const response = { id: input.id }
    return response
  }
}
