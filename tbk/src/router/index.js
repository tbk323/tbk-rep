import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/studens',
    children: [
      {
        path: '/xs',
        name: 'xs',
        component: () => import('../views/xueshengView.vue')
      },
      {
        path: '/js',
        name: 'js',
        component: () => import('../views/jiangshiView.vue')
      },
      {
        path: '/studens',
        name: 'studens',
        component: () => import('../views/studensView.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
