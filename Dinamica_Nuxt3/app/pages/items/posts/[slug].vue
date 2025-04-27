<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useWpApi } from '~/composables/useWpApi';

  const route = useRoute();
  const { getPost } = useWpApi();

  const post = ref<any>(null);

  onMounted(async () => {
    const postSlug = Array.isArray(route.params.slug)
      ? route.params.slug[0]
      : route.params.slug;
    post.value = await getPost(postSlug);
  });

  const getImageSrcSet = (media: any) => {
    if (!media) return '';
    const sizes = media.media_details.sizes;
    return Object.keys(sizes)
      .map((key) => `${sizes[key].source_url} ${sizes[key].width}w`)
      .join(', ');
  };
</script>

<template>
  <section class="section_main_news-detail">
    <article v-if="post" class="section_main_news-detail_article">
      <MenuCategorias />
      <div class="section_main_news-detail_article_tumbnail">
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          :srcset="getImageSrcSet(post._embedded['wp:featuredmedia'][0])"
          :alt="
            post._embedded['wp:featuredmedia'][0]?.alt_text ||
            'Imagen destacada del post'
          "
          sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
        />
      </div>
      <div class="section_main_news-detail_article_content">
        <h1 class="section_main_news-detail_article_content_title">
          {{ post.title.rendered }}
        </h1>
        <div
          v-html="post.content.rendered"
          class="section_main_news-detail_article_content_resume"
        ></div>
      </div>
    </article>
  </section>
</template>
