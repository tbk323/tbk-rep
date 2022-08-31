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
          import(
            /* webpackChunkName: "about" */ '../views/jichument/user/userment.vue'
          )
      },
      {
        path: '/rolement',
        name: 'rolement',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/role/rolement.vue'
          )
      },
      {
        path: '/menu',
        name: 'menu',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/menument.vue/menu.vue'
          )
      },
      {
        path: '/department',
        name: 'department',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/depart/department.vue'
          )
      },
      {
        path: '/Rank',
        name: 'Rank',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/rank/Rank.vue'
          )
      },
      {
        path: '/postment',
        name: 'postment',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/post/postment.vue'
          )
      },
      {
        path: '/loginRead',
        name: 'loginRead',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/loginRizhi/loginRead.vue'
          )
      },
      {
        path: '/doingRead',
        name: 'doingRead',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/jichument/doRizhi/doingRead.vue'
          )
      },
      {
        path: '/cailiaoMent',
        name: 'cailiaoMent',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/mangement/cailiaoMent.vue'
          )
      },
      {
        path: '/email',
        name: 'email',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/qiyement/Email/email.vue'
          )
      },
      {
        path: '/payslip',
        name: 'empayslipail',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/qiyement/Pay/payslip.vue'
          )
      },
      {
        path: '/done',
        name: 'done',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/OAproval/donement/done.vue')
      },
      {
        path: '/todo',
        name: 'todo',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/OAproval/Todo/todo.vue')
      },
      {
        path: '/Send',
        name: 'Send',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/OAproval/mySend/send.vue'
          )
      },
      {
        path: '/workFlow',
        name: 'workFlow',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/workflowment/Flow/workFlow.vue'
          )
      },
      {
        path: '/worktype',
        name: 'worktype',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/workflowment/Type/worktype.vue'
          )
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/loginment/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
