var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    lib: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  devtool: '#source-map'
})

// delete entry docs
delete module.exports.entry.docs
