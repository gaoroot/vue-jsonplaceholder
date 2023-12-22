<script setup>
defineProps(['todo'])
</script>

<template>
  <div>
    <h2>{{ todo.completed ? "🗹" : "☐" }} {{ todo.title }}</h2>
  </div>
</template>
