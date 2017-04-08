'use strict';

const webpack = require('webpack'),
    path = require('path');

const ROOT = path.resolve(__dirname, './');

module.exports = {
    entry: {
        lib: ['./a']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(ROOT, './dist'),
        publicPath: '/',
        library: 'lib',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'lib',
            path: path.resolve(ROOT, './dist/manifest.json')
        })
    ]
};