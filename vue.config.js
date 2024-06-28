// import path from 'path'
const path = require("path")
const { defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置自动访问端口号
  // 设置开发服务器，自动打开，端口号为8088
  devServer: {
    open: true,
    port: 8080
  },
  // // 解析对象，解析@/
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')//配置 @，使其表示为src
  //   }
  // },

})
