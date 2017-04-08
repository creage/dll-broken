'use strict';
// global process
const webpack = require('webpack'),
	path = require('path');

const ROOT = path.resolve(__dirname, './');

module.exports = {
	entry:{
		app: ['./app']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(ROOT, './dist'),
		publicPath: '/',
		library: 'app',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [		
		new webpack.DllReferencePlugin({
			context: '.',
            scope: 'LIB',
			manifest: path.resolve(ROOT, './dist/manifest.json')
		})		
	]
};
