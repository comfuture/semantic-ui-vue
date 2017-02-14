const process = require('process')
const webpack = require('webpack')
const config = require('./webpack.lib')

process.stdout.write("Building lib...")
webpack(config, (error, stats)=> {
  if (error) {
    throw error
  }
  process.stdout.write(' [Done]\n\n' + stats.toString({
    color: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
