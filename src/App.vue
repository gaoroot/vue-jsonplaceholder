<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/posts">Posts</RouterLink> - 
        <RouterLink to="/users">Users</RouterLink> -
        <RouterLink to="/todos">Todos</RouterLink> - 
        <RouterLink to="/albums">Albums</RouterLink> - 
        <RouterLink to="/photos">Photos</RouterLink>
      </nav>
    </div>
    <br />
  </header>

  <RouterView />
</template>
