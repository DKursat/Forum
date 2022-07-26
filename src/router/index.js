import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/welcome-view.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
 {
   path: '/login',
   name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Login-screen.vue')
  }
  ,
 {
   path: '/register',
   name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Register-screen.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
