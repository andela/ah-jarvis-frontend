module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-unescaped-entities': 0,
  },
  globals: {
    document: false,
    it: false,
  },
};
