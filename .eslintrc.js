module.exports = {
  extends: ["airbnb", "plugin:import/typescript"],
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": 2,
      },
    },
  ],
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
