var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/background.ts',
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['*', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}
