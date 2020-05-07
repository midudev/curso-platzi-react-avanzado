const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
    // splitChunks: {
    //   chunks: 'async',
    //   name: true,
    //   cacheGroups: {
    //     vendors: {
    //       name: 'vendors',
    //       chunks: 'all',
    //       reuseExistingChunk: true,
    //       priority: 1,
    //       filename: 'dist/vendor.js',
    //       enforce: true,
    //       test(module, chunks) {
    //         const name = module.nameForCondition && module.nameForCondition()
    //         return chunks.some((chunk) => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name))
    //       }
    //     }
    //   }
    // }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: { historyApiFallback: true },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petsgram - Tu app de fotos de mascotas',
      shortname: 'Petsgram 🐶',
      description: 'Con Petsgram notarás que los animales tambien tienen estilo',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#fff',
      theme_color: '#e00086',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true
        }
      ]
    }),
    new WorkBoxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://the-petgram-server.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerPort: 3000
    })
  ]
}
