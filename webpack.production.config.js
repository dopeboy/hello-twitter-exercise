'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'app/main.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    loaders: [
      { test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$' },
      { test: require.resolve('tether'), loader: 'expose?Tether' },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react'],
        },
      },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.json?$/,
        loader: 'json',
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss'),
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
    ],
  },
  postcss: [
    require('autoprefixer'),
  ],
};
