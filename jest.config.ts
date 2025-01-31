import type { Config } from 'jest'

const config = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  modulePathIgnorePatterns: ['<rootDir>/lib'],
  reporters: ['default', 'github-actions'],
  transformIgnorePatterns: [],
} satisfies Config

export default config
