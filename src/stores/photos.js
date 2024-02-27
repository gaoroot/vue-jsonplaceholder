import { defineStore } from 'pinia'
import { useAlbumStore } from './albums'
import { computed, ref } from 'vue'

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos'

export const usePhotoStore = defineStore('photo', () => {
  const photos = ref([])
  const loading = ref(false)
  const error = ref(null)
  const postAlbum = useAlbumStore()

  const getPhotoUser = computed(() =>
    users.value.find((user) => user.id === postAlbum.album.userId)
  )

  const photoCount = computed(() => photos.value.length)

  const fetchPhotos = async () => {
    photos.value = []
    loading.value = true
    try {
      photos.value = await fetch(urlPhotos).then((response) => response.json())
    } catch (error) {
      error.value = error
      console.log('error_urlPhotos', error)
      alert(error)
    } finally {
      loading.value = false
    }
  }

  const fetchPhoto = async (id) => {
    photos.value = []
    loading.value = true
    try {
      photos.value = await fetch(`${urlPhotos}/${id}`).then((response) => response.json())
    }
    catch (error) {
      error.value = error
      console.log('error_urlPhotos_id', error)
      alert(error)
    }
    finally {
      loading.value = false
    }
  }

  return { photos, getPhotoUser, photoCount, fetchPhotos, fetchPhoto, postAlbum, loading, error }
})
