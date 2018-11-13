import Main from '@/layouts/Main'
import Blog from '@/layouts/Blog'
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/blog',
    component: Blog
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router