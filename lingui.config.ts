const config = {
  locales: ['en', 'fr'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src', 'app', 'components'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
  compileNamespace: 'cjs',
  extractorParserOptions: {
    tsExperimentalDecorators: true,
  },
  orderBy: 'messageId',
}

export default config
