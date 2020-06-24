module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1'
  }
};
