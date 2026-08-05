import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
})

export default router
