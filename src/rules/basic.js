module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['sort-export-all'],
  rules: {
    indent: 0,
    'dot-notation': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-extra-semi': 'off',
    'class-methods-use-this': 1,
    eqeqeq: 2,
    'object-curly-newline': 0,
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    strict: 0,
    'max-len': [
      0,
      {
        code: 100,
      },
    ],
    'sort-export-all/sort-export-all': [
      2,
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
  },
}
