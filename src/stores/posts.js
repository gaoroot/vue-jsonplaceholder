import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const urlPosts = 'https://jsonplaceholder.typicode.com/posts'

export const usePostStore = defineStore('post', () => {
  const posts = ref([])
  const post = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const getPostsPerAuthor = computed(
    () => (authorId) => posts.value.filter((post) => post.userId === authorId)
  )

  const postCount = computed(() => posts.value.length)

  const fetchPosts = async () => {
    posts.value = []
    loading.value = true
    try {
      posts.value = await fetch(urlPosts).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlPosts', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  const fetchPost = async (id) => {
    post.value = []
    loading.value = true
    try {
      post.value = await fetch(`${urlPosts}/${id}`).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlPost_id', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  return { posts, post, getPostsPerAuthor, postCount, fetchPosts, fetchPost, loading, error }
})
