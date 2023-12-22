import { defineStore } from 'pinia'
import { usePostStore } from './post'
import { computed, ref } from 'vue'

const urlUsers = 'https://jsonplaceholder.typicode.com/users'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)
  const postStore = usePostStore()

  const getPostUser = computed(() => users.value.find((user) => user.id === postStore.post.userId))

  const fetchUsers = async () => {
    users.value = []
    loading.value = true
    try {
      users.value = await fetch(urlUsers).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlUsers', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  return { users, getPostUser, fetchUsers, postStore, loading, error }
})
