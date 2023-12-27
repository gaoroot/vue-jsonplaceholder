import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const urlTodo = 'https://jsonplaceholder.typicode.com/todos'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const todo = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const getTodosPerAuthor = computed(
    () => (authorId) => todos.value.filter((todo) => todo.userId === authorId)
  )

  const todoCount = computed(() => todos.value.length)

  const fetchTodos = async () => {
    todos.value = []
    loading.value = true
    try {
      todos.value = await fetch(urlTodo).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlTodo', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  const fetchTodo = async (id) => {
    todo.value = null
    loading.value = true
    try {
      todo.value = await fetch(`${urlTodo}/${id}`).then((response) => response.json())
    } catch (error) {
      error.value = error
      alert(error)
      console.log('error_urlTodo_id', error)
    } finally {
      loading.value = false
    }
  }

  return { todos, todo, getTodosPerAuthor, todoCount, fetchTodos, fetchTodo, loading, error }
})
