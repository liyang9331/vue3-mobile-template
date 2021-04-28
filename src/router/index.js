import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'ad',
    component: () => import('../views/ad.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
