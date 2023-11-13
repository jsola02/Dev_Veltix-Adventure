
<script lang="ts" setup>
  import { ref, onMounted, watchEffect } from 'vue';
  const { getPosts, getCategories, currentPage, totalPages, nextPage, prevPage } = useWpApi();

  const posts = ref<any[]>([]);
  const categories = ref<any[]>([]);
  const selectedCategory = ref<number | undefined>(undefined);

  onMounted(async () => {
    posts.value = await getPosts(selectedCategory.value, currentPage.value);
    categories.value = await getCategories();
  });

  watchEffect(async () => {
    posts.value = await getPosts(selectedCategory.value, currentPage.value);
  });

  const handleCategoryClick = async (categoryId: number) => {
    selectedCategory.value = categoryId;
    posts.value = await getPosts(selectedCategory.value, currentPage.value);
  };
</script>

<template>
  <!--     lista de categorias -->
  <ul class="section_headerblog_content_breadcrumbs-category">
    <li class="section_headerblog_content_breadcrumbs-category_item">
      <NuxtLink v-for="category in categories" :key="category.id" :to="`/items/${category.slug}`"
        class="section_headerblog_content_breadcrumbs-category_item_link" @click="handleCategoryClick(category.id)">
        #{{ category.name }}
      </NuxtLink>
    </li>
  </ul>
  <!--     lista de categorias -->
</template>

<style lang="scss" scoped>
.section_headerblog_content_breadcrumbs-category {
    display: none;
}

@media (min-width: 600px) {
    .section_headerblog_content_breadcrumbs-category {
    display: block; 
    padding: 1.5rem 2rem; 
  }

}
</style>
