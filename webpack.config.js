var webpack = require('webpack');
var path = require('path');

var fs = require("fs")

var rootPath = '.'
var bowerRootFromComponents = './bower_components'


module.exports = {
  entry: './src/index',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve:{
    modulesDirectories: [
      "bower_components",
      "node_modules"
    ]
  }
};
