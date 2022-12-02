const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/components/widgets/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './lib',
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