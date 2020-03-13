module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '.(ts|tsx)': 'ts-jest',
  },
  'testPathIgnorePatterns': ['\\\\node_modules\\\\'],
  'transformIgnorePatterns': ['<rootDir>/node_modules/'],
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.js"
  ],
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
  ],
  'globals': {
    "ts-jest": {
      'babelConfig': true,
      'tsConfig': "tsconfig.json"
    }
  },
  'collectCoverageFrom': ['src/**/*.{js,jsx,ts,tsx}'],
  'coverageDirectory': 'coverage',
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "moduleNameMapper": {
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  }
}