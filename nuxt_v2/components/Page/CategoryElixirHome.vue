
<script  lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useWpApi } from '~/composables/useWpApi';

/* import CardCategoryItem from '../Blog/CardCategoryItem.vue'; */

const { getCatElixir, currentPage, getCategoryIdBySlug } = useWpApi();

const posts = ref<any[]>([]);
const categories = ref<any[]>([]);
const selectedCategory = ref<number | undefined>(undefined);

// Obtiene los últimos 3 posts de la categoría "elixir" al montar el componente
onMounted(async () => {
  const newsCategoryId = await getCategoryIdBySlug('elixires');
  posts.value = await getCatElixir(newsCategoryId);
});

watchEffect(async () => {
  posts.value = await getCatElixir(selectedCategory.value, currentPage.value);
});
</script>

<template>
  <div class="section_hability_content_items">
    <BlogCardCategoryItem 
      v-for="post in posts" 
      :key="post.id" 
      :image="post._embedded['wp:featuredmedia'][0]?.source_url"
      :slug="post.slug" />
  </div>
</template>

<style lang="scss" scoped>
.section_news_article {
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  flex-direction: row;
  gap: 1.5rem 2.5rem;

}
</style>