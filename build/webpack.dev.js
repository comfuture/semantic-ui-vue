var path = require('path')
// var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = require('./webpack.base')
var utils = require('./utils')

module.exports = merge(baseConfig, {
  entry: {
    test: 'mocha!./test/unit'
  },
  output: {
    filename: utils.assetsPath('js/[name].[hash:7].js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style', 'css']
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  resolve: {
    alias: {
      'test': path.resolve(__dirname, '../test'),
      'elements': path.resolve(__dirname, '../src/components/elements')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './docs/index.html',
      inject: true,
      chunks: ['docs']
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: './docs/index.html',
      inject: true,
      chunks: ['test']
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
})
