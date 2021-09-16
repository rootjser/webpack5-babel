const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const baseWebpackConfig = require("./webpack.base");
const webpackConfig = {
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
module.exports = merge(baseWebpackConfig, webpackConfig);
