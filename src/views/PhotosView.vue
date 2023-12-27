<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePhotoStore } from '../stores/photos'
import { ref, computed } from 'vue'

const { photos, loading, error } = storeToRefs(usePhotoStore())
const { fetchPhotos } = usePhotoStore()

let page = ref(1)

const perPage = 10

const paginatedData = computed(() => {
  const start = (page.value - 1) * perPage
  const end = page.value * perPage

  return photos.value.slice(start, end)
})

const nextPage = () => {
  if (page.value !== photos.length / perPage) {
    page.value += 1
  }
}

const backPage = () => {
  if (page.value !== 1) {
    page.value -= 1
  }
}

const goToPage = (numPage) => {
  page.value = numPage
}

fetchPhotos()
</script>

<template>
  <main>
    <p v-if="loading">Загрузка списка фотографий...</p>
    <p v-if="error">{{ error.message }}</p>

    <div v-if="photos" v-for="photo in paginatedData" :key="photo.id">
      №{{ photo.id }}: 
      <img :src="photo.thumbnailUrl" :alt="photo.title"/>
      <RouterLink :to="`/photo/${photo.id}`">{{ photo.title }}</RouterLink>
    </div>
    <br />

    <button @click="backPage" :disabled=" page === 1">Предыдущая</button>
    <button v-for="item in photos.length / perPage" :key="item" @click="() => goToPage(item)" :disabled="page === item">
      {{ item }}
    </button>
    <button @click="nextPage" :disabled="page === photos.length / perPage">Следующаяя</button>
  </main>
</template>