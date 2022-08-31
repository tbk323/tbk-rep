import axios from 'axios'
import { MessageBox } from 'element-ui'
import getToken from './unth'

// 创建一个 axios实例
const http = axios.create({
  // 存放 公用的url路径的
  baseURL: '/efficient',
  // 设置网络请求超时时间
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
})

// 请求拦截
http.interceptors.request.use(
  // 成功会走第一个参数
  (config) => {
    config['headers'].token = getToken()
    return config
  },
  // 如果发送请求失败 会走第二个参数
  (error) => console.log(error)
)

// 响应拦截
http.interceptors.response.use(
  // 成功 走第一个回调函数
  (result) => {
    return result
  },
  // 失败走第二个回调函数
  (error) => {
    let title = ''
    let message = ''
    if (error && error.response) {
      message = error.response.data.message
      // 401, token失效
      // if (error.response.data.status === 2) {
      //   router.push({
      //     name: 'login'
      //   })
      return MessageBox.alert(message, title, {
        type: 'warning'
      })
    } else {
      return MessageBox.alert('请联系管理员', {
        type: 'error'
      })
    }
  }
)
export default http
