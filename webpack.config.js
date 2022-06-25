const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: { 
        publicPath: '/dist',
        directory: path.join(__dirname, 'dist') 
    },
    proxy: {
      '/api/**': { target: 'http://localhost:3000/' }
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react', '@babel/preset-env']},
      },
      {
        test: /\.(css|scss)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })],
}