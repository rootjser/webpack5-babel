const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

module.exports = {
  merge,
  HtmlWebpackPlugin,
  MiniCssExtractPlugin,
  devConfig,
  prodConfig,
};
