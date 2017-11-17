const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  // 入口
  entry: {
    app: './src/index.js'  // 并不是相对于当前文件, 而看打包命令的执行位置
  },

  // 出口
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  // 模块加载器
  module: {
    rules: [
      // 加载js(编译js)
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src')]
      },

      // 加载img
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader', // 如果配置了options,必须通过loader属性来配置loader
                                // 只能用字符串指定一个loader
        options: {
          limit: 10240,
          name: 'static/img/[name].[hash:12].[ext]'
        }
      }
    ]
  },

  // 插件
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true
    })
  ]
}