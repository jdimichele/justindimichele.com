import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import BlogsPage from '@/pages/BlogsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

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
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
})

export default router
