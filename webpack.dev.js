const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//输出html

module.exports = {
  entry:'./app/main.js',//入口文件，可以多个
  output:{
    path:__dirname+'/public',//出口地址
    filename:'bundle.js',//出口文件名
  },
  devtool:'eval-source-map',//便于调试
  devServer:{//调试服务器
    contentBase:'./public',
    inline:true,
    hot:true,
    historyApiFallback:true,
    port:9000
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',//E6 => E5
          options:{
            presets:['env']
          }
      }
    }
  ]},
  plugins:[
  new webpack.HotModuleReplacementPlugin(),//热更新插件
  new HtmlWebpackPlugin({
      template: __dirname + "/index.html" //new 一个这个插件的实例，并传入相关的参数
  })
  ]
}