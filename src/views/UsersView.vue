<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'

const { users } = storeToRefs(useUserStore())
const { fetchUsers } = useUserStore()

fetchUsers()
</script>

<template>
  <div>
    <p v-if="users" v-for="user in users" :key="user.id">
      <RouterLink :to="`/user/${user.username}`">{{ user.name }}</RouterLink>
    </p>
  </div>
</template>