const path = require('path')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['gridsome', 'prettier', 'import'],
  extends: [
    'airbnb-base',
    'plugin:gridsome/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['^~', path.resolve(__dirname, './src')]],
        extensions: ['.js', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: 'src/main.js',
      rules: {
        'func-names': ['off'],
        'no-unused-vars': ['error', { args: 'none' }],
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
