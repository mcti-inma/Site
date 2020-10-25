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
    path: '*',
    name: '404',
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
    path: '/maps',
    name: 'maps',
    component: () => import('../pages/Maps.vue')
	},
	{
    path: '/synthesis/',
    name: 'Synthesis',
    component: () => import('../pages/Synthesis.vue')
	},
	{
    path: '/search/',
		name: 'Search',
		children:[
			{
				path: '/synthesis/',
				name: 'Synthesis',
				component: () => import('../pages/Synthesis.vue')
			},
		],
    component: () => import('../pages/Search.vue')
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
