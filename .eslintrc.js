module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-param-reassign": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "import/no-unresolved": "off",
    "no-console": "warning",
    "no-debugger": "warning"
  }
};
