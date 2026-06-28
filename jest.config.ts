import type { Config } from 'jest'

const config = {
  preset: '@react-native/jest-preset',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  modulePathIgnorePatterns: ['<rootDir>/lib'],
  reporters: ['default', 'github-actions'],
  testEnvironment: 'node',
  testEnvironmentOptions: {
    customExportConditions: ['require', 'react-native'],
  },
  transformIgnorePatterns: [],
} satisfies Config

export default config
