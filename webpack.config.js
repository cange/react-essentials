var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/components/index.js',
    'react-package': [
      'classnames',
      'prop-types',
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss']
  },
  devtool: 'cheap-module-source-map', // cheap-variant of SourceMap with module mappings
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-package',
      filename:'[name].js'
    }),
    new ExtractTextPlugin('main.css')
  ]
}
