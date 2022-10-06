module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    no-console: off, 
    import/extensions: off
  },
};
