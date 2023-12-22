<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
import { usePostStore } from '../stores/post'
import { useTodoStore } from '../stores/todo'
import User from '../components/User.vue'

const route = useRoute()
const { users, loading, error } = storeToRefs(useUserStore())
const { getPostsPerAuthor } = storeToRefs(usePostStore())
const { getTodosPerAuthor } = storeToRefs(useTodoStore())
const { fetchPosts } = usePostStore()
const { fetchTodos } = useTodoStore()

const getAuthorByUserName = computed(() => {
  return users.value.find((user) => user.username === route.params.username)
})

fetchPosts()
fetchTodos()
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
      >
      </User>
    </p>
  </div>
</template>
