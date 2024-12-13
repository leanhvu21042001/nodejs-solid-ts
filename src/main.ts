import { API } from './libs/api/api'
import { ENV } from './libs/configs/env.config'

async function main() {
  API.EXPRESS.start(Number(ENV.PORT))
}

main()
