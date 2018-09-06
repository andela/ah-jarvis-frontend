module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'import'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'react/no-unescaped-entities': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    quotes: ['error', 'single'],
  },
  globals: {
    document: false,
    it: false,
    window: false,
    expect: false,
    describe: false,
    navigator: false,
    fetch: false,
    localStorage:false,
    beforeEach:false,
    afterEach:false,
    jest:false
  },
};
