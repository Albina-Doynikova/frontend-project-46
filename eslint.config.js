import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import pluginJs from '@eslint/js';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  pluginJs.configs.recommended,
  ...compat.extends('airbnb-base'),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'off',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'no-prototype-builtins': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
    },
  },
];
