<script setup>
import { RouterLink } from 'vue-router'

defineProps(['user', 'posts', 'todos', 'albums'])
</script>

<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ posts.length }} Постов написал автор:</p>
    <p v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </p>
    <hr />
    <p>{{ todos.length }} Задач у автора:</p>
    <p v-for="todo in todos" :key="todo.id">
      {{ todo.completed ? '🗹' : '☐' }}
      <RouterLink :to="`/todo/${todo.id}`">{{ todo.title }}</RouterLink>
    </p>
    <hr />
    <p>{{ albums.length }} Альбомов у автора:</p>
    <p v-for="album in albums" :key="album.id">
      <RouterLink :to="`/album/${album.id}`">{{ album.title }}</RouterLink>
    </p>
  </div>
</template>
