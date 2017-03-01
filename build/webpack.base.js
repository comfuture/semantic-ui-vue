var path = require('path')
var utils = require('./utils')
var config = require('./config')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  entry: {
    docs: './docs/src/index.js'
  },
  output: {
    path: config.docs.rootPath,
    filename: utils.assetsPath('js/[name].[chunkhash:7].js'),
    publicPath: config.docs.publicPath,
    chunkFilename: utils.assetsPath('js/chunk.[chunkhash:7].js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file',
        options: {
          name: utils.assetsPath('img/[name].[ext]?[hash:7]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file',
        options: {
          name: utils.assetsPath('fonts/[name].[ext]?[hash:7]')
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'semantic': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}
