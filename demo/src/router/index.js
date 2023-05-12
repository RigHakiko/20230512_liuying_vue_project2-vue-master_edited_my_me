
// add
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Home',
    name: '/Home',
    component: () => import( '../views//Home.vue')
  },

  
  
  {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (Register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/Project',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (Project.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Project" */ '../views/Project.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
