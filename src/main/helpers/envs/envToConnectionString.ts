import { EnvContract } from '../../contracts'

export function envToConnectionString(env: EnvContract): string {
  const { value, name } = env

  if (!/(.+):\/\/(.+)/.test(value!)) {
    throw new Error(`Invalid config: "${name}", the value should be a connection string URL`)
  }

  return value!
}
