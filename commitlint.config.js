module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
    ],
    "subject-full-stop": [2, "never"], // msg后面不允许句号
    "subject-case": [0, "never"], // 允许不加scope
    "type-case": [0, "always", "lowerCase"], // 提交前缀不允许大写
    "subject-empty": [0, "always"], // msg不许为空
  },
};
