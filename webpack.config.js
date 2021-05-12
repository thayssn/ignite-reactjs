const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: [ /node_modules/],
                loader: "babel-loader",
            },
            {
                test: /\.scss?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], 
            }
        ]
    }
};