var webpack = require("webpack");
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
                presets: ['es2015', 'react']
            }
		},{
			test:/\.scss$/,
			loader:'style-loader!css-loader!sass-loader'
		}]
	},
	
	devServer:{
		contentBase:"./public",
		inline:true,
		port:8888
	}
}
