import { EnvContract } from '../../contracts'

export function envToBoolean(env: EnvContract): boolean {
  const value = env.value.toString().toLowerCase()

  if (['true', 'on', 'yes', 'y', '1'].includes(value)) {
    return true
  }

  if (['false', 'off', 'no', 'n', '0'].includes(value)) {
    return false
  }

  throw new Error(`Invalid config: "${env.name}", the value should be a boolean`)
}
