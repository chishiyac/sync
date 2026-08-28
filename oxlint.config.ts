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
    'github/a11y-svg-has-accessible-name': 'off',
    'github/filenames-match-regex': 'off',
    'github/no-then': 'off',
    'import/default': 'off',
    'jsx-a11y/prefer-tag-over-role': 'off',
    'no-inline-comments': 'off',
    'oxc/no-barrel-file': 'off',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/button-has-type': 'off',
    'react/display-name': 'off',
    'react/exhaustive-deps': 'off',
    'react/exhaustive-effect-dependencies': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-clone-element': 'off',
    'react/no-react-children': 'off',
    'react/purity': 'off',
    'react/set-state-in-effect': 'off',
    'sonarjs/function-name': 'off',
    'sonarjs/max-union-size': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-wildcard-import': 'off',
    'typescript/ban-ts-comment': 'off',
    'typescript/consistent-type-definitions': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/import-style': 'off',
    'unicorn/prefer-export-from': 'off'
  }
})
