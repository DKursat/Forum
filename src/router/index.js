import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/sidebar',
    name: 'Sidebar',
   // route level code-splitting
    //this generates a separate chunk (about.[hash].js) for this route
    //which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Sidebar.vue')
  }
 //} 
 // {
 //   path: '/sidebar',
  //  name: 'Sidebar',

   {
   path: '/header',
    name: 'Header',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: () => import(/* webpackChunkName: "header" */ '../views/Header.vue')
  
 } 
// {
 //   path: '/about',
  //  name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../components/Sidebar.vue')
  
 //} 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
