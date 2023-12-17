<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '../stores/author'
import { usePostStore } from '../stores/post'
import { useTodoStore } from '../stores/todo'
import Author from '../components/Author.vue'

const route = useRoute()
const { authors } = storeToRefs(useAuthorStore())
const { getPostsPerAuthor } = storeToRefs(usePostStore())
const { getTodosPerAuthor } = storeToRefs(useTodoStore())
const { fetchPosts } = usePostStore()
const { fetchTodos } = useTodoStore()

const getAuthorByUserName = computed(() => {
  return authors.value.find((author) => author.username === route.params.username)
})

fetchPosts()
fetchTodos()
</script>

<template>
  <div>
    <author :author="getAuthorByUserName" :posts="getPostsPerAuthor(getAuthorByUserName.id)" :todos="getTodosPerAuthor(getAuthorByUserName.id)">
    </author>
  </div>
</template>
