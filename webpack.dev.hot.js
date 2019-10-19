// -------------------------------------------------------------------
// This configuration file is for development use
// You can make changes to this file to suit your development need
// Please refer to this webpack documentation for further information
// https://webpack.js.org/guides/development/
// -------------------------------------------------------------------

const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  devServer: {
    open: true,
    port: 3000,
    // For supporting external access (public IP / localhost)
    host: '0.0.0.0',
    useLocalIp: true,
    disableHostCheck: true,
    // Optional (Webpack Dev Server use memory for serving)
    // writeToDisk: true,
    // Force Reload if updated file is pug/html
    contentBase: path.resolve(__dirname, 'src/template'),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader', // provide autoprefixer in compiled CSS
            options: {
              plugins: () => [autoprefixer],
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
  mode: 'development',
  devtool: 'inline-source-map',
});
