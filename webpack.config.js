var webpack=require("webpack");

module.exports={
	//entry:["babel-polyfill","./asyncActionMiddleware.js"],
	entry:'./src/index.js',
	output:{
		path:__dirname+"/public",
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015']
				}
			}
		]
	}
}