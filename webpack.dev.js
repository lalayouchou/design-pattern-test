const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//输出html

module.exports = {
  entry:'./src/index.js',//入口文件，可以多个
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
    port:9000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8880'
        //代理访问，如果有'http://localhost:9000/api/*'的请求，那么转到'http://localhost:8880/api/*'
      }
    }
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