import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
Vue.use(elementUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false;
if(process.env.NODE_ENV === 'development') require('@/api/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
