<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommentStore } from '../stores/comment'
import Comment from '../components/Comment.vue'

defineProps(['post', 'user'])

const { getPostComments } = storeToRefs(useCommentStore())
const { fetchComments } = useCommentStore()

fetchComments()
</script>

<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="user">
        Пост написал:
        <RouterLink :to="`/user/${user.username}`">
          {{ user.name }}
        </RouterLink>
        |
        <span> Коментариев: {{ getPostComments.length }} </span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr />
    <h3>Коментарии:</h3>
    <comment :comments="getPostComments"></comment>
  </div>
</template>
