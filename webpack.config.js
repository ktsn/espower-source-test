const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './test.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'test.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'webpack-espower-loader'
      }
    ]
  }
}
