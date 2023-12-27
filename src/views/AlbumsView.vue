<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAlbumStore } from '../stores/albums'
import { ref, computed } from 'vue'

const { albums, loading, error } = storeToRefs(useAlbumStore())
const { fetchAlbums } = useAlbumStore()
// const { fetchAlbumId} = useAlbumStore()

let page = ref(1)

const perPage = 10

const paginatedData = computed(() => {
  const start = (page.value - 1) * perPage
  const end = page.value * perPage

  return albums.value.slice(start, end)
})

const nextPage = () => {
  if (page.value !== albums.length / perPage) {
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

// fetchAlbumId()
fetchAlbums()
</script>

<template>
  <main>
    <p v-if="loading">Загрузка списка альбомов...</p>
    <p v-if="error">{{ error.message }}</p>

    <div v-if="albums" v-for="album in paginatedData" :key="album.id">
      №{{ album.id }}
      <RouterLink :to="`/album/${album.id}`">{{ album.title }}</RouterLink>
    </div>
    <br />

    <button @click="backPage" :disabled=" page === 1">Предыдущая</button>
    <button v-for="item in albums.length / perPage" :key="item" @click="() => goToPage(item)" :disabled="page === item">
      {{ item }}
    </button>
    <button @click="nextPage" :disabled="page === albums.length / perPage">Следующаяя</button>
  </main>
</template>
