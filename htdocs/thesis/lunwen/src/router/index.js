import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '@/views/Add'
import Contact from '@/views/Contact'
import Register from '@/views/Register'
import Modify from '@/views/Modify'
import Login from '@/views/Login'
import Search from '@/views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/modify/:id',
    component: Modify
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
