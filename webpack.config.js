var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output:{
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }/*,
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader','sass-loader'],
          publicPath: '/public/css'
        })
      }*/
    ]
  }/*,
  plugins:[
    new ExtractTextPlugin({
      filename: 'app.css',
      disabled: false,
      allChunks: true
    })
  ]*/
}
