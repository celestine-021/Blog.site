/** @type {import('jest').Config} */
export default {
  preset: null,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  extensionsToTreatAsEsm: ['.jsx'],
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react|@testing-library)/)'
  ]
};