import {includeIgnoreFile} from '@eslint/compat'
import oclif from 'eslint-config-oclif'
import prettier from 'eslint-config-prettier'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const gitignorePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.gitignore')

export default [
  {
    ignores: ['bin/cjs-shims.js'],
  },
  includeIgnoreFile(gitignorePath),
  ...oclif,
  prettier,
  {
    rules: {
      'perfectionist/sort-objects': 'off',
    },
  },
  {
    files: ['test/**/*'],
    rules: {
      'mocha/max-top-level-suites': 'off',
    },
  },
]
