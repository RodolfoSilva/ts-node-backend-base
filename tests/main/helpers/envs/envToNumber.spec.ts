import { envToNumber } from '../../../../src/main/helpers'

describe('envToNumber', () => {
  test('Should return a number from config', () => {
    const env = {
      name: 'PORT',
      value: '3000',
    }

    const value = envToNumber(env)

    expect(value).toBe(3000)
  })

  test('Should return `0` when the config value is `0`', () => {
    const env = {
      name: 'PORT',
      value: '0',
    }

    const value = envToNumber(env)

    expect(value).toBe(0)
  })

  test('Should throw an error, when the config value is not a number', () => {
    const env = {
      name: 'PORT',
      value: '00,24',
    }

    expect(() => envToNumber(env)).toThrow(
      new Error('Invalid config: "PORT", the value should be a number')
    )
  })
})
