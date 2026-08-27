import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
  ...ultracite,
  jsdoc: true,
  jsxSingleQuote: true,
  printWidth: 70,
  semi: false,
  singleQuote: true,
  sortTailwindcss: true,
  tabWidth: 2,
  trailingComma: 'none'
})
