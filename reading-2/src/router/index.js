import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/table',
        name: 'table',
        component: () => import( '../views/table.vue')
      },
      {
        path: '/tab',
        name: 'tab',
        component: () => import( '../views/tab.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
