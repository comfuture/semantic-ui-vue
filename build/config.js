var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/docs'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/'
  },
  dev: {
    cssSourceMap: false
  }
}
