import { ConfigContract } from '../../contracts'
import { EnvContract } from '../../contracts/EnvContract'

export function defaultEnv(
  config: ConfigContract,
  name: string,
  defaultValue: string
): EnvContract {
  const value = config[name]
  if (typeof value !== 'undefined' && value !== '' && value !== null) {
    return {
      name: name,
      value: value!,
    }
  }

  return {
    name: name,
    value: defaultValue,
  }
}
