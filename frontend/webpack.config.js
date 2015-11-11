var path = require('path');
var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, '../app/assets'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: __dirname
      }]
  }
};

if (production) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  delete config.devtool;
  config.entry = './index';
}

module.exports = config;
