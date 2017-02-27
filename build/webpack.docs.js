var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
// var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var baseConfig = require('./webpack.base')
var utils = require('./utils')

module.exports = merge(baseConfig, {
  entry: {
    docs: './docs/src/index.js'
  },
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style',
          use: 'css'
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallback: 'vue-style',
              use: 'css'
            })
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new CopyWebpackPlugin([
    //   {
    //     context: './docs/assets',
    //     from: '**/*',
    //     to: './dist/docs/assets'
    //   }
    // ]),
    new ExtractTextPlugin(utils.assetsPath('css/[name].[chunkhash:8].css')),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './docs/index.html',
      inject: true,
      minify: {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      chunkSortMode: 'dependency'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
