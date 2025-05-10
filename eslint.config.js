import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginJest from 'eslint-plugin-jest';

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js: pluginJs,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  },

  {
    ignores: ['dist/'],
    rules: {
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'no-prototype-builtins': 'off',
    },
  },
];
