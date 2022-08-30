import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'homepage',
    component: HomeView,
    children: [
      {
        path: '/onepage',
        name: 'onepage',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/onepage.vue')
      },
      {
        path: '/userment',
        name: 'userment',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/userment.vue')
      },
      {
        path: '/rolement',
        name: 'rolement',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/rolement.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/menu.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/menu.vue')
      },
      {
        path: '/department',
        name: 'department',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/department.vue')
      },
      {
        path: '/Rank',
        name: 'Rank',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Rank.vue')
      },
      {
        path: '/postment',
        name: 'postment',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/postment.vue')
      },
      {
        path: '/loginRead',
        name: 'loginRead',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/loginRead.vue')
      },
      {
        path: '/doingRead',
        name: 'doingRead',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/doingRead.vue')
      },
      {
        path: '/cailiaoMent',
        name: 'cailiaoMent',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/cailiaoMent.vue')
      },
      {
        path: '/email',
        name: 'email',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/email.vue')
      },
      {
        path: '/payslip',
        name: 'empayslipail',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/payslip.vue')
      },
      {
        path: '/done',
        name: 'done',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/done.vue')
      },
      {
        path: '/todo',
        name: 'todo',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/todo.vue')
      },
      {
        path: '/mySend',
        name: 'mySend',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/mySend.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
