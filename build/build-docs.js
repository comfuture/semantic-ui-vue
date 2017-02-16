const process = require('process')
const webpack = require('webpack')
const rm = require('remove')
const config = require('./webpack.docs')

rm('dist/docs', (err)=> {
  if (err) {
    if (err.code !== 'ENOENT') {
      throw err
    }
  }
  process.stdout.write("Building docs...")
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
})
