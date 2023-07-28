module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 120,
      },
    },
  ],
}
