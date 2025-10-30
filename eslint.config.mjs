import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import preferArrow from 'eslint-plugin-prefer-arrow';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  pluginPrettierRecommended,
  {
    plugins: {
      'prefer-arrow': preferArrow,
    },
    rules: {
      // Prefer arrow functions everywhere
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        { disallowPrototype: true, classPropertiesAllowed: false, singleReturnOnly: false },
      ],
      // Discourage classic function declarations/expressions
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead of function declarations.',
        },
        {
          selector: 'FunctionExpression',
          message: 'Use arrow functions instead of function expressions.',
        },
      ],
      // Encourage early returns
      'no-else-return': ['error', { allowElseIf: false }],
      // Keep arrow bodies concise when possible
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
]);

export default eslintConfig;
