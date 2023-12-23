<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todos'
import Todo from '../components/Todo.vue'
const route = useRoute()
const { todo, loading, error } = storeToRefs(useTodoStore())
const { fetchTodo } = useTodoStore()

fetchTodo(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Загрузка задачи....</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="todo">
      <todo :todo="todo"></todo>
    </p>
  </div>
</template>