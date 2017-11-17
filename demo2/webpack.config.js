const HtmlPlugin = require('html-webpack-plugin')
const path = require('path') // node内置的操作文件路径的模块
// 内置的变量__dirname, 它的值是当前文件所在目录的绝对路径

/*
得到指定目录的绝对路径
 */
function resolve(dir) { // 当前项目下的一个文件夹名称
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    path: resolve('dist'),  // 目录的绝对路径
    filename: 'bundle.js'
  },

  // 模块加载器
  module: {
    rules: [
      // 加载js(ES6-->ES5)
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src')]
      },
      // 加载CSS
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']   // style(css('css文件'))
      },
      // 加载图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['url-loader']
      }
    ]
  },

  // 插件
  plugins: [
    new HtmlPlugin({
      template: 'index.html',  // 模板页面
      filename: 'index.html', // 打包生成页面
      inject: true // 自动注入js/css
    })
  ]
}