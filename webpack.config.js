'use strict';
// global process
const webpack = require('webpack'),
	path = require('path');

const ROOT = path.resolve(__dirname, './'),
	TARGET = process.env.npm_lifecycle_event;

let config;

if (TARGET === 'build:dll') {
	config = require('./webpack.dll.config');
}

if (TARGET === 'build:app') {
	config = require('./webpack.app.config');
}

module.exports = config;