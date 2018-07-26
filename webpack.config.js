//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      }
      /*{
        test: /\.scss$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath: __dirname + '/public/css'
            }
          },
          'css-loader'
        ]
      }*/
    ]
  }/*,
  plugins:[
    new MiniCssExtractPlugin({
        filename: 'app.css',
        chunkFilename: 'app.css'
    })
  ]*/
}
