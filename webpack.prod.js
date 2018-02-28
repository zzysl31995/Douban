const path = require("path")
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');// 丑化代码
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清除dist 清缓存
const ExtractTextPlugin = require("extract-text-webpack-plugin");// css
module.exports = merge(base, {
    // entry: {
    //     vendor:["react","react-dom"]
    // },
    dependencies: ["./lib/vendor.js"],
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:"css-loader"
                }),
            exclude: /node_modules/ 
          }
        ]
      },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
        sourceMap: true
        }),
        
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            minChunks:inflate
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,"lib/manifest.json")
          })
  ]
});
 