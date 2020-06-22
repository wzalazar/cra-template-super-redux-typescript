module.exports = {
    webpack: {
      alias: {
          Application: `${__dirname}/src/Application`,
          Components: `${__dirname}/src/Components`,
          Features: `${__dirname}/src/Features`,
          Hooks: `${__dirname}/src/Hooks`,
          Pages: `${__dirname}/src/Pages`,
        },
    },
    jest: {
        configure: {
          moduleNameMapper: {
            '^Application(.*)$': '<rootDir>/src/Application$1',
            '^Components(.*)$': '<rootDir>/src/Components$1',
            '^Features(.*)$': '<rootDir>/src/Features$1',
            '^Hooks(.*)$': '<rootDir>/src/Hooks$1',
            '^Pages(.*)$': '<rootDir>/src/Pages$1',
          },
          "setupFilesAfterEnv": "<rootDir>/config/jest/setupTests.js",
        },
    },
};
