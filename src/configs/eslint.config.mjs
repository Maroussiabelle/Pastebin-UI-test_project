import wdio from 'eslint-plugin-wdio'
import google from 'eslint-config-google'

export default [
  {
    languageOptions: {
      globals: {
        ...wdio.configs.recommended.globals,
      },
    },
    plugins: {
      wdio,
    },
    rules: {
      ...google.rules,
      ...wdio.configs.recommended.rules,
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'max-len': 'off',
      'space-in-parens': ['error', 'never'],
      'semi': ['error', 'never'],
    },
  },
]
