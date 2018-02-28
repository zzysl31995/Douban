const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require("webpack")//用于热更新


module.exports = merge(base, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
        exclude: /node_modules/ 
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    hot:true
  },
   plugins: [
    new webpack.NamedModulesPlugin(),//
    new webpack.HotModuleReplacementPlugin()
   ]
});
 