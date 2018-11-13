import VueRouter from 'vue-router'

import Main from '@/layouts/Main'
import Blog from '@/layouts/Blog'
import BlogArticleRead from '@/components/BlogArticleRead'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/blog',
    component: Blog,
    children: [
      {
        path: ':id',
        component: BlogArticleRead
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router