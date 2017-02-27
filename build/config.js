// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/docs'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/'
  },
  lib: {
    root: path.resolve(__dirname, '../dist')
  },
  dev: {
    cssSourceMap: false
  }
}
