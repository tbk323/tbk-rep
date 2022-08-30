import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/students',
  name: 'home',
  component: HomeView,
  children: [{
      path: '/students',
      name: 'students',
      component: () => import('../views/students.vue')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/teacher.vue')
    },
    {
      path: '/zhujiao',
      name: 'zhujiao',
      component: () => import('../views/zhujiao.vue')
    }
  ]
}]

const router = new VueRouter({
  routes
})

export default router