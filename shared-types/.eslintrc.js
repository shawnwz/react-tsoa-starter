module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 130 }],
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
