const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  output: {
    filename: "app.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};

module.exports = config;
