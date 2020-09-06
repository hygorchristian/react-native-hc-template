module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    require: "readonly",
    "__DEV__": "readonly"
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'global-require': 'off',
    'no-mixed-operators': 'off',
    'camelcase': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'import/extensions': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-irregular-whitespace': 'off'
  },
};
