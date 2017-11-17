# webpack快速入门
## 1. 目标
    1). 理解项目的模块化打包
        模块化
        打包
    2). 学会webpack的基本使用
        配置
        命令
    3). 理解webpack的相关概念
        entry
        output
        module
        bundle/chunk
           
## 2. 初始化项目
    创建空应用: demo1
    npm init -y
    
## 3. 下载webpack
    npm install webpack -g   //全局下载webpack
    npm install webpack --save-dev  //下载webpack为开发依赖
    
## 4. 编码
    1). bar.js
      export default function bar() {
        console.log('bar()')
      }
    2). app.js
      import bar from './bar'
      bar()
      document.getElementById('app').innerHTML = 'Hello, webpack'
    3). page.html
      <html>
        <head>
          <title>Hello webpack</title>
        </head>
        <body>
          <div id="app"></div>
          <script src="bundle.js"></script>
        </body>
      </html>
      
## 5. 使用webpack打包项目
    1). webpack配置: wbpack.config.js
      module.exports = {
        // 入口
        entry: './app.js',
        // 出口
        output: {
          filename: 'bundle.js'
        }
      }
    2). 编译打包
      webpack
    3). 浏览器打开page.html, 查看运行效果

## 6. 总结
    1). webpack中的四个概念
        entry: webpack打包的入口
        output: webpack打包生成什么
        module: 模块文件
        bundle/chunk: webpack打包n个关联的module生成的文件
    2). 理解webpack的模块化打包
        1. webpack的模块化打包是建立在应用是模块化编码的基础上的, 且你的应用至少有一个入口JS模块
        2. webpack在打包是会从入口js开始, 将所有相关联的模块连接起来, 形成一个图(网)的结构, 
           将图中所有模块打包成一个或少量几个bundle文件, 而浏览器运行是打包生成的bundle文件
    3). webpack的基本配置和命令
        1. 默认配置文件为: webpack.config.js
            module.exports = {
              entry: '入口js',
              output: {
                filename: '打包生成的bundle'
              }
            }
        2. 打包命令
            webpack

## 7. 待解决问题
    1). webpack本身只能打包JS, 而项目中的css/img等资源如何打包?
    2). 页面能不能自动引入动态生成的打包JS/CSS 