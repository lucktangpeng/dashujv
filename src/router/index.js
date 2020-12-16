import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from ''
// import home from '@/views/home.vue'
// import home from '@/views/home.vue'
// import home from '@/views/home.vue'
// import home from '@/views/home.vue'
// import home from '@/views/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/2',
    name: 'home',
    component: () => import('../views/two.vue')
  },
  {
    path: '/3',
    name: 'home',
    component: () => import('../views/three.vue')
  },
  {
    path: '/4',
    name: 'home',
    component: () => import('../views/four.vue')
  },
  {
    path: '/5',
    name: 'home',
    component: () => import('../views/five.vue')
  },
  {
    path: '/6',
    name: 'home',
    component: () => import('../views/six.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
