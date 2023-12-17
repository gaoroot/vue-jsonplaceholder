<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
// import { useAuthorStore } from '../stores/author'
import { useTodoStore } from '../stores/todo'
import Todo from '../components/Todo.vue'

const route = useRoute()
// const { getPostAuthor } = storeToRefs(useAuthorStore())
// const { fetchAuthors } = useAuthorStore()
const { todo, loading, error } = storeToRefs(useTodoStore())
const { fetchTodo } = useTodoStore()

// fetchAuthors()
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
