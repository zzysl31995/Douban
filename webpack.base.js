const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:7].js'
   },
  module: {
    rules: [
      {
        test: /\.js$/,  
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }, 
         exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
     new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      inject:"body"
     })
   ]
};
 