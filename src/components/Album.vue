<script setup>
import { RouterLink } from 'vue-router'
defineProps(['album', 'photos'])
</script>

<template>
  <div>
    <h2>{{ album.title }}</h2>

    <p v-for="photo in photos" :key="photo.id">
      <img :src="photo.thumbnailUrl" :alt="photo.title" />
      <br />
      <RouterLink :to="`/photo/${photo.id}`">
        {{ photo.title }}
      </RouterLink>
    </p>
    <!-- <p>{{ album.body }}</p>
    <hr />
    <h3>Photos</h3>
    <p v-if="photos.length === 0">No Photos</p>
    <p v-for="photo in photos" :key="photo.id">
      <img :src="photo.thumbnailUrl" :alt="photo.title" />
      <br />
      <RouterLink :to="`/photo/${photo.id}`">
        {{ photo.title }}
      </RouterLink>
    </p> -->
    <!-- <p v-for="photo in photos" :key="photo.id">
      <img :src="photo.thumbnailUrl" :alt="photo.title" />
      <br />
      <RouterLink :to="`/photo/${photo.id}`">
        {{ photo.title }}
      </RouterLink>
    </p> -->
  </div>
</template>
