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
    path: '/synthesis/:id',
    name: 'Synthesis',
    component: () => import('../pages/Synthesis.vue')
	},
	{
		path: '/topic1/:id',
    name: 'topic1',
    component: () => import('../pages/topics/topic1.vue')
	},
	{
		path: '/topic2/:id',
    name: 'topic2',
    component: () => import('../pages/topics/topic2.vue')
	},
	{
		path: '/topic3/:id',
    name: 'topc3',
    component: () => import('../pages/topics/topic3.vue')
	},
	{
		path: '/topic4/:id',
    name: 'topic4',
    component: () => import('../pages/topics/topic4.vue')
	},
	{
		path: '/topic5/:id',
    name: 'topic5',
    component: () => import('../pages/topics/topic5.vue')
	},
	{
		path: '/topic6/:id',
    name: 'topic6',
    component: () => import('../pages/topics/topic6.vue')
	},
	{
		path: '/topic7/:id',
    name: 'topic7',
    component: () => import('../pages/topics/topic7.vue')
	},
	{
		path: '/topic8/:id',
    name: 'topic8',
    component: () => import('../pages/topics/topic8.vue')
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
