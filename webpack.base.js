const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
// fixed file path methods ：  path.resolve(__dirname)
// runtime file path methods ： process.cwd()
const isInstalled = path.resolve(__dirname) !== process.cwd();

const getFullPathWithExtension = (filePath, extensions = []) => {
  if (!extensions.length) return filePath;
  for (let i = 0; i < extensions.length; i++) {
    const fullPath = filePath + extensions[i];
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
};

const getAbsoluteFile = (fileName, extensions = []) => {
  const localPath = path.resolve(__dirname, fileName);
  const runtimePath = path.resolve(process.cwd(), fileName);
  try {
    require(runtimePath);
    return getFullPathWithExtension(runtimePath, extensions);
  } catch (e) {}
  return getFullPathWithExtension(localPath, extensions);
};

const getRelativePathWithExtension = (filePath, fileName, extensions = []) => {
  if (!extensions.length) return fileName;
  for (let i = 0; i < extensions.length; i++) {
    const fullPath = filePath + extensions[i];
    if (fs.existsSync(fullPath)) {
      return fileName + extensions[i];
    }
  }
};

const getRelativeFile = (fileName, extensions = []) => {
  const localPath = path.resolve(__dirname, fileName);
  const runtimePath = path.resolve(process.cwd(), fileName);
  try {
    require(runtimePath);
    return getRelativePathWithExtension(runtimePath, fileName, extensions);
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND") {
      return getRelativePathWithExtension(runtimePath, fileName, extensions);
    }
  }
  return getRelativePathWithExtension(
    localPath,
    localPath.replace(runtimePath, "") + fileName,
    extensions
  );
};

const browserslistrc = (() => {
  const filePath = getRelativeFile(".browserslistrc");
  const content = fs.readFileSync(filePath, "UTF-8");
  return content.split("\n").map((m) => m.trim());
})();

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, isInstalled ? "../../" : "", "dist"),
    filename: "[name].[contenthash:8].js",
    assetModuleFilename: "images/[contenthash][ext][query]",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: "asset",
        generator: {
          filename: "fonts/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        type: "asset", // asset  asset/inline  asset/resource
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10K
          },
        },
      },
      {
        test: /\.(jsx?|tsx?)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: "3",
                  targets: { browsers: browserslistrc },
                },
              ],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic", // classic automatic
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|less|sass|scss)/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: browserslistrc,
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getRelativeFile("index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
      "process.env": {},
    }),
    new ESLintPlugin({
      overrideConfigFile: getAbsoluteFile(".eslintrc", [
        ".js",
        ".json",
        ".yml",
      ]),
    }),
  ],
};
