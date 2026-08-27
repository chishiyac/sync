import { defineConfig } from 'oxlint'
import core from 'ultracite/oxlint/core'
import { selectJsPlugins } from 'ultracite/oxlint/js-plugins'
import react from 'ultracite/oxlint/react'

const JS_PLUGINS = selectJsPlugins(['github', 'sonarjs'])

export default defineConfig({
  extends: [core, react, JS_PLUGINS],
  ignorePatterns: core.ignorePatterns,
  rules: {
    'func-style': 'off',
    'github/filenames-match-regex': 'off',
    'import/default': 'off',
    'no-inline-comments': 'off',
    'oxc/no-barrel-file': 'off',
    'react/function-component-definition': 'off',
    'sonarjs/function-name': 'off',
    'sonarjs/max-union-size': 'off',
    'sonarjs/no-wildcard-import': 'off',
    'typescript/ban-ts-comment': 'off',
    'typescript/consistent-type-definitions': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/import-style': 'off'
  }
})
