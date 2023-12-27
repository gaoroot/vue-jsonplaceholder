<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAlbumStore } from '../stores/albums'
import Album from '../components/Album.vue'
const route = useRoute()
const { album, loading, error } = storeToRefs(useAlbumStore())
// const { fetchAlbum } = useAlbumStore()
const { fetchAlbumId} = useAlbumStore()

fetchAlbumId(route.params.id)
// fetchAlbum(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Загрузка альбома....</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="album">
      <Album :album="album"></Album>
    </p>
  </div>
</template>
