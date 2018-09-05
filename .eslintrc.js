module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': ['never', { ignoreClassFields: true }],
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
