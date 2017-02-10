var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    docs: './docs/src/index.js'
  },
  output: {
    path: './dist/docs/',
    publicPath: './',
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: './docs/assets',
        from: '**/*',
        to: './dist/docs/assets'
      }
    ]),
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
    })
  ]
})
