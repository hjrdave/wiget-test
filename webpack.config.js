const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/widgets/index.tsx',
    devtool: 'inline-source-map',
    output: {
        filename: `bundle.js`,
        library: ["ReactWidget"],
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.tsx', '.ts', '.js'],
    }
}
