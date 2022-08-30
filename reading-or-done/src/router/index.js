import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/tab',
        name: 'tab',
        component: () => import( '../views/tab.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import( '../views/table.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/',
    redirect:'/table'
  }
]

const router = new VueRouter({
  routes
})

export default router
