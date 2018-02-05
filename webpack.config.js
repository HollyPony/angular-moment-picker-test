'use strict'

// Modules
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr|en/),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ],
}
