const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "src/index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlWebpackPlugin, miniCssExtractPlugin]
};
