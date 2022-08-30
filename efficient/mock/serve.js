const express = require('express') //引入express
const Mock = require('mockjs') //引入mock
const login = require('./common/login.json')
const loginsearch = require('./common/loginRead.json')
const app = express() //实例化express

/**登录接口 */
app.use('/user/login', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      login
    })
  )
})

/**登录日志 */
app.use('/home/loginsearch', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      loginsearch
    })
  )
})

app.listen(8090, () => {
  console.log('监听端口 8090')
})
