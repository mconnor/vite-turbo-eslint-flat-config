import astroLintConfig from '@repo/eslint-config/astroLintConfig.js';

export default [
  ...astroLintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [
      '**/_*.*',
      '**/temp.js',
      '*.config.*',
      'dist/',
      'my-custom-cache-directory',
      '**/env.d.ts',
      '.*',
    ],
  },
];