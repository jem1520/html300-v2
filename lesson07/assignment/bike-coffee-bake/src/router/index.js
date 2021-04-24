// importing vue components for app
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bikeshop from '../views/bikeshop.vue'
import Coffeeshop from '../views/coffeeshop.vue'
import Bakeshop from '../views/bakeshop.vue'

// setting up and exporting vue router links for app
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bikeshop',
    name: 'bikeshop',
    component: Bikeshop
  },
  {
   path: '/coffeeshop',
   name: 'coffeeshop',
   component: Coffeeshop
 },
 {
  path: '/bakeshop',
  name: 'bakeshop',
  component: Bakeshop
 }
]

const router = new VueRouter({
  routes
})

export default router
