module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(svg)$': 'jest-svg-transformer',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
};
