const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {

  // 出口
  output: {
    filename: 'static/js/[name].[chunkhash].js'
  },

  // 模块加载器
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"]
        })
      },
    ]
  },
  // 开发工具
  // devtool: 'source-map',  // 只在测试生产环境使用

  //插件
  plugins: [
    // 清除dist文件夹
    new CleanPlugin('dist', {
      root: resolve('')
    }),
    // 将css单独打包到指定的位置
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash].css'
    }),

    // 此插件将第三方模块单独打包到vendor.js中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // 任何引入的node_modules下的模块都打包到vendor中
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      },
    }),
    // 将webpack的runtime和manifest代码单独打包到manifest.js中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'] // 从vendor中抽取
    }),

    // 压缩JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),

    // 压缩CSS
    // 压缩css, 重复的样式也会被移除
    new OptimizeCssPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})
