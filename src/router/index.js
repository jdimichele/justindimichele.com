import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProjectListPage from '@/pages/ProjectListPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import BlogListPage from '@/pages/BlogListPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
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
    component: ProjectListPage,
  },
  {
    path: '/projects/:id',
    name: 'ProjectPage',
    component: ProjectPage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogListPage,
  },
  {
    path: '/blog/:id',
    name: 'BlogPage',
    component: BlogPage,
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
