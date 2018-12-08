const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|vue)$/,
        exclude: /(node_modules)/,
        loader: "eslint-loader",
        enforce: "pre"
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "test")
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    hot: true,
    port: 9099
  }
};
