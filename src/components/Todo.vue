<script setup>
defineProps(['todo'])
</script>

<template>
  <div>
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.completed }}</p>
  </div>
</template>
