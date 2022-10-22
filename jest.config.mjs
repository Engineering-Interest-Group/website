import nextJest from 'next/jest.js'

/**
 * @type {import('jest').Config}
 */

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jest-environment-jsdom'
}

export default nextJest({
  dir: './'
})(customJestConfig)
