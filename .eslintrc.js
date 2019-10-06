module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  settings:  {
    react:  {
      version:  'detect',
    }
  },
  rules:  {
    '@typescript-eslint/interface-name-prefix': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0
  }
};
