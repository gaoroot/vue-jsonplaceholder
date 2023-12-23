<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/users'
import { usePostStore } from '../stores/posts'
import Post from '../components/Post.vue'

const route = useRoute()
const { getPostUser } = storeToRefs(useUserStore())
const { fetchUsers } = useUserStore()
const { post, loading, error } = storeToRefs(usePostStore())
const { fetchPost } = usePostStore()

fetchUsers()
fetchPost(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Загрузка поста...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="post">
      <post :post="post" :user="getPostUser"></post>
    </p>
  </div>
</template>