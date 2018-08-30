module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-unescaped-entities': 0,
    quotes: [2, 'backtick', 'double'],
  },
  globals: {
    document: false,
    it: false,
  },
};
