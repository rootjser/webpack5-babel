module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: true,
  },
  rules: {
    "no-useless-escape": "warn",
    "no-irregular-whitespace": "warn",
    "no-control-regex": "warn",
    "no-prototype-builtins": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "no-var": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-this-alias": "warn",
  },
};
