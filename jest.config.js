const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
  collectCoverageFrom: [
    'app/page.tsx',
    'components/**/*.tsx',
    'hooks/**/*.ts',
    'lib/**/*.ts',
  ],
};

module.exports = createJestConfig(config);
