var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		main: './client/main.ts',
		pollyfill: './client/pollyfill.ts',
	},
	output:{
		path:'./dist',
		filename:'app.[name].js'
	},
	module:{
		loaders:[
			{ test: /\.ts$/, loader: 'ts'},
			{ test: /\.html$/, loader: 'html-loader'},
			{ test: /\.scss$/,  exclude: /node_modules/,
				 loader: ExtractTextPlugin.extract("style", "css!sass")
			},
			{ test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000'},
			{ 
				test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader?limit=10000&mimetype=application/font-woff'
			}
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
		}),
		// new CopyWebpackPlugin([{
	 //        from: './client/assets',
	 //        to: 'assets'
		// }]),
		new ExtractTextPlugin("[name].css")
	]

};