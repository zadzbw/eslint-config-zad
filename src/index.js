const { isPackageExists } = require('local-pkg')

const hasTS = isPackageExists('typescript')

module.exports = {
  extends: [
    './rules/basic',
    './rules/import',
    ...(hasTS ? ['./rules/typescript'] : []),
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  rules: {},
}
