import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  cache: false,
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  setupFiles: ['dotenv/config'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
}

export default config
