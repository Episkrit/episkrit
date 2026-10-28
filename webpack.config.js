const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    clean: true
  },
  devtool: false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff2?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
