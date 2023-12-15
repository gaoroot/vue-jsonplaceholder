import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue' 
import PostView from '../views/PostView.vue' 
import AuthorsView from '../views/AuthorsView.vue'
import AuthorView from '../views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsView
    },
    { 
      path: '/post/:id', 
      name: 'post', 
      component: PostView 
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView
    },
    { 
      path: '/author/:username', 
      name: 'author', 
      component: AuthorView 
    },
  ]
})

export default router
