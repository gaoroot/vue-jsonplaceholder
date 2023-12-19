import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: []
  }),
  getters: {
    getPostUser: (state) => {
      const postStore = usePostStore()
      return state.users.find((user) => user.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchUsers() {
      this.users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
        response.json()
      )
    }
  }
})
