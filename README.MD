webpack5 配置文件 babel、sass、less、react、ts

## 安装

```code
npm i webpack5-babel -D
```

## 根目录添加 webpack 配置文件

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

> index.html

```code
必须在根目录增加index.html文件
```

## package.json 添加执行命令

```code
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
```
