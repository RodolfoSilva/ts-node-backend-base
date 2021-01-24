import { ConfigContract } from '../../../../src/main/contracts'
import { requireEnv } from '../../../../src/main/helpers'

describe('requireEnv', () => {
  test('Should return the value from config file when the name of config is valid', () => {
    const config: ConfigContract = {
      PORT: '3000',
    }

    const env = requireEnv(config, 'PORT')

    expect(env).toEqual({ name: 'PORT', value: '3000' })
  })

  test('Should throw an error, when the config does not exists', () => {
    const config: ConfigContract = {}

    expect(() => requireEnv(config, 'PORT')).toThrow(new Error('Missing config: "PORT"'))
  })

  test('Should throw an error, when the config exists but the value is an empty string', () => {
    const config: ConfigContract = {
      PORT: '',
    }

    expect(() => requireEnv(config, 'PORT')).toThrow(new Error('Missing config: "PORT"'))
  })

  test('Should throw an error, when the config exists but the value is null', () => {
    const config = {
      PORT: null,
    } as any

    expect(() => requireEnv(config, 'PORT')).toThrow(new Error('Missing config: "PORT"'))
  })
})
