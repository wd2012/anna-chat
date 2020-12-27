const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: '../src/index.jsx',
  output: {
      filename: 'bundle.[hash].js',
      path: path.join(__dirname, '/dist')
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CleanWebpackPlugin(['dist'])
  ]
};