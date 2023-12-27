<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/posts'
import { ref, computed } from 'vue'

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

const page = ref(1)

const perPage = 10

const paginatedData = computed(() => {
  const start = (page.value - 1) * perPage
  const end = page.value * perPage

  return posts.value.slice(start, end)
})

const nextPage = () => {
  if (page.value !== posts.length / perPage) {
    page.value += 1
  }
}

const backPage = () => {
  if (page.value !== 1) {
    page.value -= 1
  }
}

const goToPage = (numPage) => {
  page.value = numPage
}

fetchPosts()
</script>

<template>
  <main>
    <p v-if="loading">Загрузка списка постов...</p>
    <p v-if="error">{{ error.message }}</p>

    <div v-if="posts" v-for="post in paginatedData" :key="post.id">
      №{{ post.id }}:
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      <p>{{ post.body }}</p>
    </div>
    <br />

    <button @click="backPage" :disabled=" page === 1">Предыдущая</button>
    <button v-for="item in posts.length / perPage" :key="item" @click="() => goToPage(item)" :disabled="page === item">
      {{ item }}
    </button>
    <button @click="nextPage" :disabled="page === posts.length / perPage">Следующаяя</button>
  </main>
</template>