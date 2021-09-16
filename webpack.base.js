const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "../../", "dist"),
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
                  targets: { browsers: ["last 2 versions", "> 0.5%", "IE 10"] },
                },
              ],
              [
                "@babel/preset-react",
                {
                  runtime: "classic", // classic automatic
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(less|css)/i,
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
                      overrideBrowserslist: [
                        "last 2 version",
                        "> 0.5%",
                        "IE 10",
                      ],
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(sass|scss)/i,
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
                      overrideBrowserslist: [
                        "last 2 version",
                        "> 0.5%",
                        "IE 10",
                      ],
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
      "process.env": {},
    }),
  ],
};
