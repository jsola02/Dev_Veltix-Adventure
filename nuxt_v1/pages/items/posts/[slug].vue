<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWpApi } from '~/composables/useWpApi'; 




const route = useRoute();
const { getPost } = useWpApi();

const post = ref<any>(null);

onMounted(async () => {
  const postSlug = route.params.slug;
  post.value = await getPost(postSlug);
});
</script>

<template>
  <section class="section_main_news-detail">
   
    <article 
      v-if="post"
      class="section_main_news-detail_article"
      > 
      <MenuCategorias />
      <div class="section_main_news-detail_article_tumbnail">
        <img 
          :src="post._embedded['wp:featuredmedia'][0]?.source_url" 
          alt="Imagen destacada del post"           
          />
      </div>
      <div class="section_main_news-detail_article_content">
        <h1 class="section_main_news-detail_article_content_title">
          {{ post.title.rendered }}
        </h1>
        <!-- <p>   Última actualizacion: {{post.date }}</p> -->
        <div v-html="post.content.rendered" class="section_main_news-detail_article_content_resume">
        </div>
      </div>
    </article>
  </section>




</template>
