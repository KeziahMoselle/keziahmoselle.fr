import VueRouter from 'vue-router'

import Main from '@/layouts/Main'
import ArticleList from '@/layouts/Blog/ArticleList'
import ArticleRead from '@/layouts/Blog/ArticleRead'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/blog',
    component: ArticleList,
    name: 'listArticles',
  },
  {
    path: '/blog/:id',
    component: ArticleRead,
    name: 'readArticle',
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router