import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect:'/study'
    redirect:'/test1'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/study',
    name: 'study',
    component: () => import(/* webpackChunkName: "about" */ '../views/study/index.vue')
  },
  {
    path: '/index',
    name: 'index',
    // component:resolve => require(['../views/index/index.vue'], resolve)
    component: () => import(/* webpackChunkName: "about" */ '../views/index/index.vue')
  },
  {
    path: '/website',
    name: 'website',
    component: () => import(/* webpackChunkName: "about" */ '../views/website.vue')
    // component:resolve => require(['../views/website.vue'], resolve)
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/index/test.vue')
    // component:resolve => require(['../views/index/test.vue'], resolve)
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../views/index/test1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
