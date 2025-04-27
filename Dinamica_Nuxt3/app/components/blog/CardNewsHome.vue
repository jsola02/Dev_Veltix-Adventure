<script lang="ts" setup>
  import moment from 'moment';
  import 'moment/locale/es';
  moment.locale('es');

  // Define los tipos de las propiedades
  const { title, excerpt, image, slug, date } = defineProps<{
    title: string;
    excerpt?: string;
    image?: string;
    slug?: string;
    date?: string;
  }>();

  // Define el método computed para la fecha formateada
  const formattedDate: string = date
    ? moment(date)
        .format('DD MMMM YYYY')
        .replace(/ \w/, (char) => char.toUpperCase())
    : '';
</script>

<template>
  <div class="section_news_article_card">
    <div class="section_news_article_card_tumb">
      <NuxtLink
        :to="`/items/posts/${slug}`"
        v-if="image"
        class="section_news_article_card_tumb_link"
        title="lorem"
      >
        <img
          :src="image"
          :alt="title"
          class="section_news_article_card_tumb_link_img"
          title="ilustracion de  ultima noticia subida"
        />
      </NuxtLink>
    </div>
    <div class="section_news_article_card_content">
      <p class="section_news_article_card_content_date">
        <i class="lar la-calendar-check la-lg"></i>
        {{ formattedDate }}
      </p>
      <h3 class="section_news_article_card_content_title"> {{ title }}</h3>
      <p class="section_news_article_card_content_more">
        <NuxtLink
          :to="`/items/posts/${slug}`"
          class="section_news_article_card_content_more_link"
          title="lorem"
        >
          leer mas
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .section_news_article_card_content {
    max-width: 400px;
  }
</style>
