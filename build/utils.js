var path = require('path')
var config = require('./config')

exports.assetsPath = function (_path) {
  return path.posix.join(config.build.assetsSubDirectory, _path)
}
