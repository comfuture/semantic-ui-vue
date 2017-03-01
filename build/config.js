var path = require('path')

module.exports = {
  docs: {
    rootPath: path.resolve(__dirname, '../dist/docs'),
    assetsPath: 'assets',
    publicPath: '/',
    templateIndex: path.resolve(__dirname, '../docs/index.html')
  },
  lib: {
    rootPath: path.resolve(__dirname, '../dist')
  },
  dev: {

  }
}
