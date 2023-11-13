
<script  lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useWpApi } from '~/composables/useWpApi';

const { getPostsHome, getCategories, currentPage, getCategoryIdBySlug} = useWpApi();

const posts = ref<any[]>([]);
const categories = ref<any[]>([]);
const selectedCategory = ref<number | undefined>(undefined);

// Obtiene los últimos 4 posts de la categoría "noticias" al montar el componente
onMounted(async () => {
  const newsCategoryId = await getCategoryIdBySlug('noticias');
  posts.value = await getPostsHome(newsCategoryId);
});

watchEffect(async () => {
  posts.value = await getPostsHome(selectedCategory.value, currentPage.value);
});
</script>

<template>
    <div  class="section_news_article" >
     
      <BlogCardNewsHome
          v-for="post in posts" 
          :key="post.id" 
          :title="post.title.rendered" 
          :excerpt="post.excerpt.rendered"
            :image="post._embedded['wp:featuredmedia'][0]?.source_url" 
            :slug="post.slug" 
            :date="post.date" />
    </div>
    
 
</template>



<style lang="scss" scoped>
</style>