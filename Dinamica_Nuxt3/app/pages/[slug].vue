<script lang="ts" setup>
  import { useWpApi } from '~/composables/useWpApi';
  import { useRoute } from 'vue-router'; // Asegúrate de importar desde 'vue-router'
  const { params } = useRoute();

  const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
  const post = posts.value[0];
</script>

<template>
  <section class="section_main_news-detail">
    <!-- {{ params }} -->
    <article class="section_main_news-detail_article">
      <div class="section_main_news-detail_article_tumbnail">
        <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" alt="" />
      </div>
      <div class="section_main_news-detail_article_content">
        <h1 class="section_main_news-detail_article_content_title">
          {{ post.title.rendered }}
        </h1>
        <p>Última actualizacion: {{ post.date }}</p>
        <div
          v-html="post.content.rendered"
          class="section_main_news-detail_article_content_resume"
        >
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
