<script lang="ts" setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import { useWpApi } from '~/composables/useWpApi';

  const { getCatComida, currentPage, getCategoryIdBySlug } = useWpApi();

  const posts = ref<any[]>([]);
  const categories = ref<any[]>([]);
  const selectedCategory = ref<number | undefined>(undefined);
  const lastPostDate = ref<string | null>(null);

  // Obtiene los últimos 4 posts de la categoría "noticias" al montar el componente
  onMounted(async () => {
    const newsCategoryId = await getCategoryIdBySlug('comidas');
    posts.value = await getCatComida(newsCategoryId);
    if (posts.value && posts.value.length > 0) {
      lastPostDate.value = posts.value[0].date;
    }
  });

  watchEffect(async () => {
    posts.value = await getCatComida(selectedCategory.value, currentPage.value);
  });
</script>

<template>
  <div class="section_hability_content_items">
    <!-- fecha de la ultima publicacion, para agregarse en actualizacion
      <p v-if="lastPostDate">Último post publicado el: {{ lastPostDate }}</p>
    -->
    <BlogCardCategoryItem
      v-for="post in posts"
      :key="post.id"
      :image="post._embedded['wp:featuredmedia'][0]?.source_url"
      :slug="post.slug"
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
