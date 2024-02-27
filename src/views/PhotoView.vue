<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/users'
import { usePhotoStore } from '../stores/photos'
import Photo from '../components/Photo.vue'

const route = useRoute()
const { getPostUser } = storeToRefs(useUserStore())
const { fetchUsers } = useUserStore()
const { photo, loading, error } = storeToRefs(usePhotoStore())
const { fetchPhoto } = usePhotoStore()

fetchUsers()
fetchPhoto(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Загрузка поста...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="photo">
      <Photo :photo="photo"></Photo>
    </p>
  </div>
</template>