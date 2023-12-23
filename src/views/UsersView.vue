<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/users'

const { users, loading, error } = storeToRefs(useUserStore())
const { fetchUsers } = useUserStore()

fetchUsers()
</script>

<template>
  <main>
    <p v-if="loading">Загрузка списка авторов...</p>
    <p v-if="error">{{ error.message }}</p>

    <div v-if="users" v-for="user in users" :key="user.id">
      №{{ user.id }}:
      <RouterLink :to="`/user/${user.username}`">{{ user.name }}</RouterLink>
    </div>
  </main>
</template>