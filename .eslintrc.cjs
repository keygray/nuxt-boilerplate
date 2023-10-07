module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended'
  ],
  plugins: [],
  rules: {
    'import/named': 'off',
    'vue/no-v-html': 'off',
    'no-console': 'warn',
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
    semi: 0,
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'warn'
  },
  globals: {
    $nuxt: true
  }
}
