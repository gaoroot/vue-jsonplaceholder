import { defineStore } from 'pinia'
import { usePostStore } from './posts'
import { computed, ref } from 'vue'

const urlComments = 'https://jsonplaceholder.typicode.com/comments'

export const useCommentStore = defineStore('comment', () => {
  const comments = ref([])
  const loading = ref(false)
  const error = ref(null)
  const postStore = usePostStore()

  const getPostComments = computed(() =>
    comments.value.filter((post) => post.postId === postStore.post.id)
  )

  const commentCount = computed(() => comments.value.length)

  const fetchComments = async () => {
    comments.value = []
    loading.value = true
    try {
      comments.value = await fetch(urlComments).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlComments', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  return { comments, getPostComments, commentCount, fetchComments, postStore, loading, error }
})
