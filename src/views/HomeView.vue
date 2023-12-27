<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/users'
import { usePostStore } from '@/stores/posts'
import { useTodoStore } from '@/stores/todos'
import { useAlbumStore } from '@/stores/albums'
import { usePhotoStore } from '@/stores/photos'

const usersGet = useUserStore()
const postGet = usePostStore()
const todoGet = useTodoStore()
const albumGet = useAlbumStore()
const photoGet = usePhotoStore()

const home = ref('Главная')

usersGet.fetchUsers()
postGet.fetchPosts()
todoGet.fetchTodos()
albumGet.fetchAlbums()
photoGet.fetchPhotos()
</script>

<template>
  <div>
    <h1>{{ home }}</h1>
    <div>Количество авторов: {{ usersGet.userCount }}</div>
    <hr />
    <div>Количество постов: {{ postGet.postCount }}</div>
    <hr />
    <div>Количество задач: {{ todoGet.todoCount }}</div>
    <hr />
    <div>Количество альбомов: {{ albumGet.albumCount }}</div>
    <hr />
    <div>Количество фото: {{ photoGet.photoCount }}</div>
  </div>
</template>
