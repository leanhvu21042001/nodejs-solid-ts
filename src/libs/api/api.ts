import { BLogDI } from '~/di/blog.di'

import { ApiExpress } from './express/api.express'
import { CreateBlogRouteExpress } from './express/routes/blog/create-blog.express.route'
import { GetAllBlogExpressRoute } from './express/routes/blog/get-all-blog.express.route'

export const API = {
  EXPRESS: ApiExpress.create([
    GetAllBlogExpressRoute.create(BLogDI.getAllBlogQuery),
    CreateBlogRouteExpress.create(BLogDI.createBlogCommand),
  ]),
}
