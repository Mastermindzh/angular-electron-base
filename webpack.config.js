var path = require('path');
var webpack = webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://' + require("os").hostname() + ':9090/',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/entry.js')
  ]
};

module.exports = config;
