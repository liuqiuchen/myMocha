const path = require('path');

module.exports = {
	entry: './test-pre/add.test.js',
	output: {
		path: './test/',
		filename: 'add.test.js'
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.css', '.jsx']
	}
};