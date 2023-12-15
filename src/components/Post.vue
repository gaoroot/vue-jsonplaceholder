<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommentStore } from '../stores/comment'
import Comment from '../components/Comment.vue'

defineProps(['post', 'author'])

const { getPostComments } = storeToRefs(useCommentStore())
const { fetchComments } = useCommentStore()

fetchComments()
</script>

<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author">
        Написано:
        <RouterLink :to="`/author/${author.username}`">
          {{ author.name }}
        </RouterLink>
        |
        <span> Коментарии: {{ getPostComments.length }} </span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr />
    <h3>Коментарии:</h3>
    <comment :comments="getPostComments"></comment>
  </div>
</template>
