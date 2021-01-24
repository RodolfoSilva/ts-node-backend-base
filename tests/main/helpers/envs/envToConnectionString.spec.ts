import { envToConnectionString } from '../../../../src/main/helpers'

describe('envToConnectionString', () => {
  test('Should return the connection string URL from the config object', () => {
    const env = {
      name: 'DATABASE_URL',
      value: 'postgres://username:password@localhost:5432/database',
    }

    const value = envToConnectionString(env)

    expect(value).toEqual(env.value)
  })

  test('Should throw a error when the the connection string URL is invalid', () => {
    const env = {
      name: 'DATABASE_URL',
      value: 'database-url-string',
    }

    expect(() => envToConnectionString(env)).toThrow(
      new Error('Invalid config: "DATABASE_URL", the value should be a connection string URL')
    )
  })
})
