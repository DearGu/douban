var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	devtool:"source-map",
	entry:"./index.js",
	
	output:{
		path:__dirname + "/public",
		filename:"bundle.js"
	},
	
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-assign']
            }
		},{
			test:/\.scss$/,
			loader:'style-loader!css-loader!sass-loader'
		},{
			test:/\.(png|jpg|gif)$/,
			loader:'url-loader?limit=8192'
		},{
			test:/\.svg$/,
			loader:'svg-url-loader'
		}]
	},
	
	devServer:{
		contentBase:"./public",
		inline:true,
		port:8888,
		disableHostCheck:true  //设置为true可以允许IP访问
	},
	
	plugins: [
	    new HtmlWebpackPlugin({
	        hash: true,
	        template:"./template.html",
	    })
	]
}
