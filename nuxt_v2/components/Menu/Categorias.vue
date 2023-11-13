<script lang="ts" setup>
  import { ref, onMounted, watchEffect } from 'vue';
/*   import { useWpApi } from '../composable/useWpApi'; */
import { useWpApi } from '~/composables/useWpApi';
  const { getPosts, getCategories, currentPage, totalPages, nextPage, prevPage } = useWpApi();

  // 1. Definir la interfaz para Category
  interface Category {
    id: number;
    name: string;
    slug: string;
    [key: string]: any; // Puedes añadir esto si hay otras propiedades desconocidas
  }

  const posts = ref<any[]>([]);
  const categories = ref<Category[]>([]); // Usar la interfaz aquí
  const selectedCategory = ref<number | undefined>(undefined);

  const excludedCategories = ['noticias', 'sin-categorias', 'economia', 'items'];

  onMounted(async () => {
    posts.value = await getPosts(selectedCategory.value, currentPage.value);
    let allCategories: Category[] = await getCategories(); // Usar la interfaz aquí

    categories.value = allCategories.filter(category => !excludedCategories.includes(category.slug));
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
   
  }

}
</style>
