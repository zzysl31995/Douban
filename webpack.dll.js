const path = require("path")
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');// 丑化代码

module.exports = {
  entry: [
    "react",
    "react-dom"
    /*。。。等其他依赖库*/ 
  ],
  output: {
    path: path.resolve("lib"),
    filename: "vendor.js",
    library: "vendor_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "vendor_[hash]",
      path: path.resolve("lib/manifest.json")
    }),
    new UglifyJSPlugin()
  ]
}