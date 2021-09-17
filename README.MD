webpack5 配置文件 babel、sass、less、react、ts、eslint

## （必须）安装

```code
npm i webpack5-babel -D
```

## （必须）根目录添加 webpack 配置文件

> webpack.dev.js

```code
    const { devConfig, merge } = require("webpack5-babel");
    module.exports = devConfig;
```

> webpack.prod.js

```code
    const { prodConfig, merge } = require("webpack5-babel");
    module.exports = prodConfig;
```

## （必须）package.json 调整

> scripts 增加 dev 和 build 命令

```code
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
```

## （可选）可覆盖文件

> entry 和 output 配置默认

```code
默认entry是src/index文件，支持.js,.jsx,.ts,.tsx
默认output是dist
```

> index.html 配置默认

引入包后，如果根目录有 index.html 文件会优先使用，否则调用包默认的 index.html 文件
1、默认 index.html 文件没有 title
2、有 div，id=root

> .browserslistrc 配置默认

引入包后，如果根目录有 .browserslistrc 文件会优先使用，否则调用包默认的 .browserslistrc 文件

```code
last 2 versions
> 0.5%
IE 10
```

> .eslintrc.js 配置默认

引入包后，如果根目录有 .eslintrc.(js|json|yml) 文件会优先使用，否则调用包默认的 eslintrc.js 文件

```code
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
```
