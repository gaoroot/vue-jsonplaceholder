<script setup>
import { RouterLink } from 'vue-router'

defineProps(['user', 'posts', 'todos'])
</script>

<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ posts.length }} постов написал автор:</p>
    <p v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </p>
    <hr />
    <p>{{ todos.length }} задач у автора:</p>
    <p v-for="todo in todos" :key="todo.id">
      <RouterLink :to="`/todo/${todo.id}`">{{ todo.title }}</RouterLink>
    </p>
  </div>
</template>
