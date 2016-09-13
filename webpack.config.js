var webpack = require('webpack');

module.exports = {
	entry: './client/main.ts',
	output:{
		path:'./dist',
		filename:'app.bundle.js'
	},
	module:{
		loaders:[
			{ test:/\.ts$/, loader:'ts'}
		]
	},
	resolve:{
		extensions:['','.js','.ts']
	}

};