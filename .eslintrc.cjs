module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'quotes': ['error', 'single'], 
    'semi': ['error', 'always'], // Force semicolons
    'indent': ['error', 2], // 2 space indentation
    'no-multi-spaces': ['error'] // Avoid extra space
  }
};