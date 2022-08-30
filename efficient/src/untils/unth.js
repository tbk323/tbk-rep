import Cookies from 'js-cookie'

const Tokenkey = 'token'

// 获取
export function getToken() {
  return Cookies.get(Tokenkey)
}

// 设置
export function setToken(token) {
  Cookies.set(Tokenkey, token)
}

// 删除
export function removeToken() {
  Cookies.remove(Tokenkey)
}
