import { defineConfig } from 'eslint/config';
import esLint from '@eslint/js';
import tsEsLint from 'typescript-eslint';

export default defineConfig(
  { ignores: [
    '**/blueprint/*',
    '**/.squire-build/*',
    'dist/*'
  ]},
  esLint.configs.recommended,
  tsEsLint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-misused-new': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      '@typescript-eslint/no-unused-expressions': [ 'error', { allowTernary: true, allowShortCircuit: true }],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [ 'error', { args: 'none' }],
      'no-empty': [ 'off', { allowEmptyCatch: true }]
    }
  }
);
