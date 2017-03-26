const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.js',
  externals: [nodeExternals()],
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  }
};
