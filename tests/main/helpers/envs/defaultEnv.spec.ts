import { defaultEnv } from '../../../../src/main/helpers'

describe('defaultEnv', () => {
  test('Should return the value from config file when the name of config is valid', () => {
    const config = {
      PORT: '3000',
    }

    const env = defaultEnv(config, 'PORT', '5000')

    expect(env).toEqual({ name: 'PORT', value: '3000' })
  })

  test('Should return the default value when the config object does not have the config', () => {
    const config = {}

    const env = defaultEnv(config, 'PORT', '5000')

    expect(env).toEqual({ name: 'PORT', value: '5000' })
  })

  test('Should return the default value when the value of config object is empty', () => {
    const config = {
      PORT: '',
    }

    const env = defaultEnv(config, 'PORT', '5000')

    expect(env).toEqual({ name: 'PORT', value: '5000' })
  })

  test('Should return the default value when the value of config object is null', () => {
    const config = {
      PORT: null,
    } as any

    const env = defaultEnv(config, 'PORT', '5000')

    expect(env).toEqual({ name: 'PORT', value: '5000' })
  })
})
