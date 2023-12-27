<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/users'
import { usePostStore } from '../stores/posts'
import { useTodoStore } from '../stores/todos'
import { useAlbumStore } from '@/stores/albums'
import User from '../components/User.vue'

const route = useRoute()
const { users, loading, error } = storeToRefs(useUserStore())
const { getPostsPerAuthor } = storeToRefs(usePostStore())
const { getTodosPerAuthor } = storeToRefs(useTodoStore())
const { getAlbumsPerAuthor } = storeToRefs(useAlbumStore())
const { fetchPosts } = usePostStore()
const { fetchTodos } = useTodoStore()
const { fetchAlbums } = useAlbumStore()

const getAuthorByUserName = computed(() => {
  return users.value.find((user) => user.username === route.params.username)
})

fetchPosts()
fetchTodos()
fetchAlbums()
</script>

<template>
  <div>
    <p v-if="loading">Загрузка автора....</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="users">
      <User
        :user="getAuthorByUserName"
        :posts="getPostsPerAuthor(getAuthorByUserName.id)"
        :todos="getTodosPerAuthor(getAuthorByUserName.id)"
        :albums="getAlbumsPerAuthor(getAuthorByUserName.id)"
      >
      </User>
    </p>
  </div>
</template>