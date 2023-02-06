import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LookBook from '../views/LookBook.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/lookbook',
    name: 'lookbook',
    component: LookBook
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
