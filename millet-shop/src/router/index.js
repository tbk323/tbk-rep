import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/allshop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/allshop',
    name: 'allshop',
    component: HomeView
  },
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue')
  },
  {
    path: '/xq',
    name: 'xq',
    component: () => import('../views/xq.vue')
  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('../views/shopcar.vue')
  },
  {
    path: '/like',
    name: 'like',
    component: () => import('../views/like.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order.vue')
  },
  {
    path: '/okorder',
    name: 'okorder',
    component: () => import('../views/okorder.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
