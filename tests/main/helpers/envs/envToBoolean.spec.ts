import { envToBoolean } from '../../../../src/main/helpers'

describe('numericEnv', () => {
  test.each`
    value     | expected
    ${'true'} | ${true}
    ${'TRUE'} | ${true}
    ${'on'}   | ${true}
    ${'ON'}   | ${true}
    ${'yes'}  | ${true}
    ${'YES'}  | ${true}
    ${'Y'}    | ${true}
    ${'1'}    | ${true}
  `('Should return a $expected when the value is `$value`', ({ value, expected }) => {
    const env = {
      name: 'RUN_JOBS',
      value: value,
    }

    const result = envToBoolean(env)

    expect(result).toBe(expected)
  })

  test.each`
    value      | expected
    ${'false'} | ${false}
    ${'FALSE'} | ${false}
    ${'off'}   | ${false}
    ${'OFF'}   | ${false}
    ${'no'}    | ${false}
    ${'NO'}    | ${false}
    ${'n'}     | ${false}
    ${'N'}     | ${false}
    ${'0'}     | ${false}
  `('Should return a $expected when the value is `$value`', ({ value, expected }) => {
    const env = {
      name: 'RUN_JOBS',
      value: value,
    }

    const result = envToBoolean(env)

    expect(result).toBe(expected)
  })

  test('Should throw an error, when the config value is not a boolean', () => {
    const env = {
      name: 'RUN_JOBS',
      value: 'palindrome',
    }

    expect(() => envToBoolean(env)).toThrow(
      new Error('Invalid config: "RUN_JOBS", the value should be a boolean')
    )
  })
})
