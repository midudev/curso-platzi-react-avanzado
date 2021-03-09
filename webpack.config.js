const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet photo app',
      shortname: 'Petgram',
      description: 'Here you can share photos of your pets and see those of your friends.',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.svg'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm|wav)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[contenthash].[ext]',
            outputPath: 'assets'
          }
        },
      },
    ]
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  resolve: {
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    }
  }
};
