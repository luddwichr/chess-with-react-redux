module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
};
