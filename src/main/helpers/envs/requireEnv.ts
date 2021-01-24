import { ConfigContract } from '../../contracts'
import { EnvContract } from '../../contracts'

export function requireEnv(config: ConfigContract, name: string): EnvContract {
  if (typeof config[name] !== 'undefined' && config[name] !== '' && config[name] !== null) {
    return {
      name: name,
      value: config[name]!,
    }
  }

  throw new Error(`Missing config: "${name}"`)
}
