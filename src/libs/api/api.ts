import { BLogDI } from '~/di/blog.di'
import { UserDI } from '~/di/user.di'

import { ApiExpress } from './express/api.express'
import { LoginAuthExpressRoute } from './express/routes/auth/login-auth.express.route'
import { RefreshTokenExpressRoute } from './express/routes/auth/refresh-token.express.route'
import { RegisterAuthExpressRoute } from './express/routes/auth/register-auth.express.route'
import { CreateBlogRouteExpress } from './express/routes/blog/create-blog.express.route'
import { GetAllBlogExpressRoute } from './express/routes/blog/get-all-blog.express.route'

const apiExpressRoutes = [
  GetAllBlogExpressRoute.create(BLogDI.getAllBlogQuery),
  CreateBlogRouteExpress.create(BLogDI.createBlogCommand),

  LoginAuthExpressRoute.create(UserDI.GetUserByUsernameQuery),
  RegisterAuthExpressRoute.create(UserDI.createUserCommand),
  RefreshTokenExpressRoute.create(UserDI.getUserByIDQuery),
]

export const API = {
  EXPRESS: ApiExpress.create(apiExpressRoutes),
}
