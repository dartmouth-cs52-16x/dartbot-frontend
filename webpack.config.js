const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  stats: { colors: true },
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src'],
  output: {
    path: 'build',
    publicPath: 'build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader'),
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css'),
    },
    // Image URL config. Generate data URI's for images smaller than 10,000 bytes
    { test: /\.(png|gif|jpe?g|svg)$/i, loader: 'url?limit=10000' },

    // Image file config. Generate hashed file names to make them easy to cache.
    {
      test: /\.(png|gif|jpe?g|svg)$/i,
      loader: 'file?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]',
    },
    {
      test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
      loader: 'url',
    },
  ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
