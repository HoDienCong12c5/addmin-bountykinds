module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [2, 2],
    'no-multi-spaces': ['error', { 'ignoreEOLComments': false }],
    'no-undef': 'warn',
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'quotes': ['error', 'single'],
    'space-in-brackets': ['off', 'always'],
    'no-unused-vars': 'warn',
    'semi': 'off',
    'space-in-parens': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': 'off',
    'no-use-before-define': 'error',
    'no-prototype-builtins': 'off',
    'eact/no-unescaped-entities': 'off'
  }
};
