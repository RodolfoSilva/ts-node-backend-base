import { defaultEnv, envToNumber } from '../helpers'

const env = {
  port: envToNumber(defaultEnv(process.env, 'PORT', '5050')),
}

export default env
