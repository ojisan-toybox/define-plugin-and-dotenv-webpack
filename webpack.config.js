const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const definePlugin = new webpack.DefinePlugin({
  WORLD: JSON.stringify("WORLD")
});

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [new Dotenv(), definePlugin]
};
