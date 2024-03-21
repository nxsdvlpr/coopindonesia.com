module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,

  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('tailwind-variants'),
  ],

  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
}
