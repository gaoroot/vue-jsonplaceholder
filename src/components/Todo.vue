<script setup>
// import { RouterLink } from 'vue-router'
// import { storeToRefs } from 'pinia'
// import { useCommentStore } from '../stores/todo'

defineProps(['todo'])

// const { getPostComments } = storeToRefs(useCommentStore())
// const { fetchComments } = useCommentStore()

// fetchComments()
</script>

<template>
  <div>
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.completed }}</p>
  </div>
</template>
