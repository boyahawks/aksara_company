import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Service from '../views/Service.vue'
import Client from '../views/Client.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  
]

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes
});

export default router;
