import { EnvContract } from '../../contracts'

export function envToNumber(env: EnvContract): number {
  const { name, value } = env

  if (isNaN(Number(value))) {
    throw new Error(`Invalid config: "${name}", the value should be a number`)
  }

  return Number(value)
}
