<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWpApi } from '~/composables/useWpApi'; 

const route = useRoute();
const { getPost } = useWpApi();

const post = ref<any>(null);

onMounted(async () => {
  const postSlug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
  post.value = await getPost(postSlug);
});
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title.rendered }}</h1>
    <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" alt="Imagen destacada del post" />
    <div v-html="post.content.rendered"></div>
  </div>
</template>
