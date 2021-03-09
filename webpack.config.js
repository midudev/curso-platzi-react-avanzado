const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

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
      name: 'Petgram',
      shortname: 'Petgram',
      description: 'Here you can share photos of your pets and see those of your friends.',
      orientation: 'portrait',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true,
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          },
        },
        {
          urlPattern: new RegExp('https://petgram-server-mateombar.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          },
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
