const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const dotenv = require('dotenv').config({ path: __dirname + './env' })

module.exports = {
    target: 'web',
    devtool: 'source-map',
    devServer: {
        port: 1234,
        historyApiFallback: true,
        client: {
            overlay: true
        }
    },
    stats: 'minimal',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'view'),
        publicPath: '/',
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed)
        })
    ]
}
