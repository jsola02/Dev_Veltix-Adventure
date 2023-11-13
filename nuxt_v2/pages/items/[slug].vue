<script lang="ts" setup>
import { ref, onMounted,watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useWpApi } from '~/composables/useWpApi'; 
import { WpCategory } from '~/types/types';  // Importa la interfaz desde la ruta donde creaste types.ts

const route = useRoute();
const { getPosts, getCategory, currentPage, totalPages, nextPage, prevPage } = useWpApi();

const posts = ref<any[]>([]);
const categoryName = ref<string>('');
const categories = ref<any[]>([]);
const selectedCategory = ref<number | undefined>(undefined);

onMounted(async () => {
  const categorySlug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
  const categoryData = await getCategory<WpCategory>(categorySlug);  // Usa la interfaz WpCategory aquí
  categoryName.value = categoryData.name;
  posts.value = await getPosts(categoryData.id, currentPage.value);
});

watchEffect(async () => {
  posts.value = await getPosts(selectedCategory.value, currentPage.value);
});
</script>

<template>
  <div>
    <PageHeader :title="'Items de ' + categoryName"/>
    <section class="section_news_category">
      <div class="section_news_category_title">
        <h1 class="section_news_category_title_name">Informacion sobre: <span class="section_headerblog_content_breadcrumbs_item_link-title">{{ categoryName }}</span></h1>
        <p class="section_news_category_title_description">mantente informado para mejorarar tu experiencia de juego.</p>
      </div>

      <BlogCardNewsCategory class="section_news_category_article"
        v-for="post in posts"
        :key="post.id"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :image="post._embedded['wp:featuredmedia'][0]?.source_url"
        
        :slug="post.slug" 
        :date="post.date"
      />

      <div class="post_pagination">
        <button class="post_pagination_button" @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span class="post_pagination_text">Página {{ currentPage }} de {{ totalPages }}</span>
        <button class="post_pagination_button" @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div> 
    </section>
  </div>
</template>


<style lang="scss" scoped>
.post_pagination {
  margin: 3rem 0px ;
  grid-column: 1/-1;  
  text-align: center;  
  &_button {
    background: darkorange;
    color: aliceblue;
    border: solid 1px darkorange;
    border-radius: 13px ;
    padding: 5px 10px;
    margin: 0px 10px;
  }
  &_post_pagination_text {
    font-family: 'Nunito', sans-serif;
  }

  &_button:hover {
    background: rgb(207, 12, 181);
    color: aliceblue;
    border: solid 1px rgb(207, 12, 181);
    border-radius: 13px ;
    padding: 5px 10px;
    margin: 0px 10px;
  }

}

.section_headerblog_content_breadcrumbs-category{
  grid-column: 1/3;  
  text-align: center; 
}
</style>