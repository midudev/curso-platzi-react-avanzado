const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

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
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://res.cloudinary.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cloudinary'
          }
        },
        {
          urlPattern: new RegExp('https://images.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-unsplash'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-api.midudev.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    }),
    new WebpackManifestPlugin({
      name: 'Petgram - Fotos de mascotes',
      short_name: 'Petgram',
      description: 'Encuentra fotografías de tus mascotas favoritas',
      theme_color: '#8d01ff',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ]
}
