//webpack.config.js
//const path = require('path');
module.exports = {
   entry: './src/index.js',
   output: {
      filename: `bundle.js`,
      library: ["SCWidgets"],
      libraryTarget: 'umd',
      umdNamedDefine: true,
      publicPath: '/dist/'
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
    
   ]
}