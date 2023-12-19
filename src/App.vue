<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink> -
        <RouterLink to="/users">Users</RouterLink> -
        <RouterLink to="/todos">Todos</RouterLink>
      </nav>
    </div>
    <br>
  </header>

  <RouterView />
</template>
