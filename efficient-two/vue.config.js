const { defineConfig } = require('@vue/cli-service')
// console.log(process.env)
const target =
  process.env.VUE_APP_MOCK_ENABLE === 'true'
    ? `http://localhost:8090`
    : process.env.VUE_APP_CONSOLE_URL
console.log(target)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    // 配置代理
    proxy: {
      [process.env.VUE_APP_API]: {
        target:
          process.env.VUE_APP_MOCK_ENABLE === 'true'
            ? `http://localhost:8888`
            : process.env.VUE_APP_CONSOLE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_API]: ''
        }
      }
    }
  }
})
