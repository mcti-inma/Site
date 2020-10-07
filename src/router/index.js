import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'
// import Members from '../pages/Members.vue'


Vue.use(VueRouter)

const routes = [
	{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import('../pages/Members.vue')
	},
	{
    path: '/synthesis/:id',
    name: 'Synthesis',
    component: () => import('../pages/Synthesis.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
