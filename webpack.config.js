var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./client/index.html'
		}),
		new webpack.DefinePlugin({
		      app: {
		        environment: JSON.stringify(process.env.NODE_ENV || 'development')
		      }
		})
	]

};