const { merge } = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

module.exports = {
  merge,
  devConfig,
  prodConfig,
};
