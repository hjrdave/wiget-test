//webpack.config.js
const path = require('path');
const widgetConfig = require('./widget.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: widgetConfig.name + '.bundle.js'
   },
   devServer: {
      port: 8080
   },
   externals: {
      'react': 'React', // Case matters here,
      'react-dom' : 'ReactDOM' // Case matters here 
     },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
      ]
   },
   plugins:[
      //  new HtmlWebpackPlugin({
      //       template: path.join(__dirname,'/src/index.html')
      //  }) 
   //    new HtmlWebpackPlugin({
   //       hash: true,
   //       rootID: widgetConfig.name,
   //       template: './public/index.html',
   //       filename: 'index.html', //relative to root of the application
   //       bundle: widgetConfig.name + '.bundle.js'
   //   })
   ]
}