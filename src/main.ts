import { API } from './libs/api/api'
import { ENV } from './libs/configs/env.config'

async function main() {
  API.expressServer.start(ENV.PORT)
}

main()
