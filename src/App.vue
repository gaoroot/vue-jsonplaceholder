<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <!-- <div @click="$router.push({name: 'home'})" :style="{'color': $route.name === 'home' ? 'black' : 'gray'}" class="nav-link" aria-current="page">Home</div> -->
        <!-- <RouterLink to="/" :style="{'color': $route.name === 'home' ? 'black' : 'gray'}">Главная</RouterLink> -  -->
        <RouterLink to="/">Главная</RouterLink> - 
        <RouterLink to="/users">Авторы</RouterLink> -
        <RouterLink to="/posts">Посты</RouterLink> - 
        <RouterLink to="/todos">Задачи</RouterLink> - 
        <RouterLink to="/albums">Альбомы</RouterLink> - 
        <RouterLink to="/photos">Фотографии</RouterLink>
      </nav>
    </div>
    <br />
  </header>

  <RouterView />
</template>
