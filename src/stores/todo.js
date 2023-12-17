import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [],
    todo: null,
    loading: false,
    error: null
  }),
  getters: {
    getTodosPerAuthor: (state) => {
      return (authorId) => state.todos.filter((todo) => todo.userId === authorId)
    }
  },
  actions: {
    async fetchTodos() {
      this.todos = []
      this.loading = true
      try {
        this.todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
          response.json()
        )
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTodo(id) {
      this.todo = null
      this.loading = true
      try {
        this.todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
          (response) => response.json()
        )
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
