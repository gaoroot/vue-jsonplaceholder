<script setup>
import { useUserStore } from '../stores/users'
const usersGet = useUserStore()
</script>

<template>
  <h3>404 - Страница не найдена</h3>
  <hr />
  <div>
    Количество авторов: <b>{{ usersGet.userCount }}</b>
  </div>
  <div>Тест API</div>
  <button @click="usersGet.fetchUsers()">Получить список авторов</button>
  <ul>
    <li v-for="user in usersGet.users">{{ user.id }} - {{ user.name }}</li>
  </ul>
</template>
