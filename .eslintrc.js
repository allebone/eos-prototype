module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never',
    }],
    // Best Practices
    'eqeqeq': 'error',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',

    // Variable
    'init-declarations': 'error',
    'no-use-before-define': 'error',

    // Stylistic Issues
    'array-bracket-newline': 0,
    'array-bracket-spacing': 0,
    'brace-style': ["error", "1tbs", { "allowSingleLine": true }],
    'block-spacing': 'error',
    'comma-dangle': 0,
    'comma-spacing': 0,
    'comma-style': 0,
    'computed-property-spacing': 0,
    'func-call-spacing': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'import/imports-first': 0,
    'import/first': 0,
    'import/order': [0, {"groups": ["index", "sibling", "parent", "internal", "external", "builtin", "object"]}],
    'import/import-order': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'init-declarations': 0,
    'indent': 0,
    'keyword-spacing': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-lonely-if': 'error',
    'no-mixed-operators': 0,
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-tabs': 0,
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': ["error", { "allowAllPropertiesOnSameLine": true }],
    'quote-props': 0,
    'quotes': 0,
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 0,
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',

    // ES6
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 0,
    'prefer-const': 'error',
    'prefer-template': 'error',

    // Vue
    "vue/html-quotes": ["error", "double"]
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],}
      },
  },  
}
