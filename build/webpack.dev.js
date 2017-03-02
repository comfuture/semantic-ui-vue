// var path = require('path')
// var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = require('./webpack.base')
var utils = require('./utils')

module.exports = merge(baseConfig, {
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.templateIndex(),
      inject: true
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
