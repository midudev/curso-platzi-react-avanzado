const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components']
          }
        }
      }
    ]
  },
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })]
}
