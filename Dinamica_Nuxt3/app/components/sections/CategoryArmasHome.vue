<script lang="ts" setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import { useWpApi } from '~/composables/useWpApi';

  const { getCatArmas, currentPage, getCategoryIdBySlug } = useWpApi();

  const posts = ref<any[]>([]);
  const categories = ref<any[]>([]);
  const selectedCategory = ref<number | undefined>(undefined);

  // Obtiene los últimos 4 posts de la categoría "noticias" al montar el componente
  onMounted(async () => {
    const newsCategoryId = await getCategoryIdBySlug('armas');
    posts.value = await getCatArmas(newsCategoryId);
  });

  watchEffect(async () => {
    posts.value = await getCatArmas(selectedCategory.value, currentPage.value);
  });
</script>

<template>
  <div class="section_hability_content_items">
    <BlogCardCategoryItem
      v-for="post in posts"
      :key="post.id"
      :image="post._embedded['wp:featuredmedia'][0]?.source_url"
      :slug="post.slug"
      :title="post.autor"
    />
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
