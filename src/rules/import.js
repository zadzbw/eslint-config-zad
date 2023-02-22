module.exports = {
  extends: ['plugin:import/recommended'],
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**/*.scss',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/**/*.css',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          // react
          {
            pattern: 'react',
            group: 'builtin',
            position: 'after',
          },
          // react-dom/client
          {
            pattern: 'react-*/**',
            group: 'builtin',
            position: 'after',
          },
          // react-xxx
          {
            pattern: 'react-*',
            group: 'builtin',
            position: 'after',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        pathGroupsExcludedImportTypes: ['react', 'react-*/**', 'react-*'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
  },
}
