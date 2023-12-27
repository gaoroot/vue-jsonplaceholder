import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const urlAlbum = 'https://jsonplaceholder.typicode.com/albums'

export const useAlbumStore = defineStore('album', () => {
  const albums = ref([])
  const album = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const getAlbumsPerAuthor = computed(
    () => (authorId) => albums.value.filter((album) => album.userId === authorId)
  )

  const albumCount = computed(() => albums.value.length)

  const fetchAlbums = async () => {
    albums.value = []
    loading.value = true
    try {
      albums.value = await fetch(urlAlbum).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlAlbum', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  const fetchAlbum = async (id) => {
    album.value = null
    loading.value = true
    try {
      album.value = await fetch(`${urlAlbum}/${id}`).then((response) => response.json())
    } catch (error) {
      error.value = error
      alert(error)
      console.log('error_urlAlbum_id', error)
    } finally {
      loading.value = false
    }
  }

  const fetchAlbumId = async (id) => {
    album.value = null
    loading.value = true
    try {
      album.value = await fetch(`${urlAlbum}/${id}/photos`).then((response) => response.json()) ///albums/1/photos
    } catch (error) {
      error.value = error
      alert(error)
      console.log('error_urlAlbum_id', error)
    } finally {
      loading.value = false
    }
  }

  // const getAlbum = computed(() => (id) => albums.value.find((album) => album.id === id))

  // const getAlbums = computed(() => (authorId) => albums.value.filter((album) => album.userId === authorId))

  return { albums, album, getAlbumsPerAuthor, albumCount, fetchAlbum, fetchAlbums, fetchAlbumId, loading, error }
})
