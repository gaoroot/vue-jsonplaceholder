<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todos'
import { ref, computed } from 'vue'

const { todos, loading, error } = storeToRefs(useTodoStore())
const { fetchTodos } = useTodoStore()

let page = ref(1)

const perPage = 10

const paginatedData = computed(() => {
  const start = (page.value - 1) * perPage
  const end = page.value * perPage

  return todos.value.slice(start, end)
})

const nextPage = () => {
  if (page.value !== todos.length / perPage) {
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

fetchTodos()
</script>

<template>
  <main>
    <p v-if="loading">Загрузка списка дел...</p>
    <p v-if="error">{{ error.message }}</p>

    <div v-if="todos" v-for="todo in paginatedData" :key="todo.id">
      №{{ todo.id }}: {{ todo.completed ? '🗹' : '☐' }}
      <RouterLink :to="`/todo/${todo.id}`">{{ todo.title }}</RouterLink>
    </div>
    <br />

    <button @click="backPage" :disabled=" page === 1">Предыдущая</button>
    <button v-for="item in todos.length / perPage" :key="item" @click="() => goToPage(item)" :disabled="page === item">
      {{ item }}
    </button>
    <button @click="nextPage" :disabled="page === todos.length / perPage">Следующаяя</button>
  </main>
</template>