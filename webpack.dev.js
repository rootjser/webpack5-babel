const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");
const webpackConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    liveReload: false,
    open: true,
  },
};
module.exports = merge(baseWebpackConfig, webpackConfig);
