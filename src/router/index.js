import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'
import UsersView from '../views/UsersView.vue'
import UserView from '../views/UserView.vue'
import TodosView from '../views/TodosView.vue'
import TodoView from '../views/TodoView.vue'
import HomeView from '../views/HomeView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import AlbumView from '../views/AlbumView.vue'
import PhotosView from '../views/PhotosView.vue'
import PhotoView from '../views/PhotoView.vue'

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
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: '/album/:id',
      name: 'album',
      component: AlbumView
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosView
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: PhotoView
    },
    { 
      path: '/404', 
      name: 'notfound', 
      component: NotFound 
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'notfound', 
      component: NotFound 
    }
  ]
})

export default router
