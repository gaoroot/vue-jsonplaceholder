import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue' 
import PostView from '../views/PostView.vue' 
import UsersView from '../views/UsersView.vue'
import UserView from '../views/UserView.vue'
import TodosView from '../views/TodosView.vue'
import TodoView from '../views/TodoView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    { 
      path: '/post/:id', 
      name: 'post', 
      component: PostView 
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    { 
      path: '/user/:username', 
      name: 'user', 
      component: UserView 
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosView
    },
    { 
      path: '/todo/:id', 
      name: 'todo', 
      component: TodoView 
    },
  ]
})

export default router
