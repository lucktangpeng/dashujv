import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import two from '@/views/two.vue'
import three from '@/views/three.vue'
import four from '@/views/four.vue'
import five from '@/views/five.vue'
import six from '@/views/six.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/2',
    name: 'home',
    component: two
  },
  {
    path: '/3',
    name: 'home',
    component: three
  },
  {
    path: '/4',
    name: 'home',
    component: four
  },
  {
    path: '/5',
    name: 'home',
    component: five
  },
  {
    path: '/6',
    name: 'home',
    component: six
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
