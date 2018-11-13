import Vue from 'vue'
import Router from 'vue-router'
// import { getStore } from '@/lib/utils'
// import Cookies from 'js-cookie'

const Home = () => import('@views/home.vue')
const Test = () => import('@views/test.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
