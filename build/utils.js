var path = require('path')
var config = require('./config')

exports.assetsPath = function (_path) {
  return path.posix.join(config.docs.assetsPath, _path)
}

exports.templateIndex = function() {
  return config.docs.templateIndex
}
