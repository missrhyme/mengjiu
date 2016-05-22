module.exports = {
  entry: [
    './js/app'
  ],
  output: {
    path: './dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.json$/,
      loaders: [ 'json' ],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test:/\.css?$/,
      loader: 'style!css'
    },
    {
      test:/\.(png|jpg|eot|woff|ttf|svg)$/,
      loader: 'url-loader?limit=1024000'
    }]
  },
  externals: {
    'zepto'     : 'Zepto',
    'react'     : 'React',
    'react-dom' : 'ReactDOM'
  }
}
