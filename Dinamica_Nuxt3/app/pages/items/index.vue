<script lang="ts" setup>

</script>

<template>
  <div>
    <PageHeader title="Items" />
    <section class="section_news_category">
      <div class="section_news_category_title">
        <h2 class="section_news_category_title_name">
          Descubre las últimas noticias
        </h2>
        <p class="section_news_category_title_description">
          Mantente actualizado con nuestras novedades más recientes.
        </p>
      </div>

      <BlogCardNewsHome class="section_news_category_article" />

      <div class="post_pagination">
        <button class="post_pagination_button">Anterior</button>
        <span class="post_pagination_text">Página </span>
        <button class="post_pagination_button">Siguiente</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section_news {
  margin-top: 0px;
}

.post_pagination {
  padding: 3rem 0px;
  margin-top: 2rem;
  grid-column: 1/3;
  text-align: center;

  &_button {
    background: darkorange;
    color: aliceblue;
    border: solid 1px darkorange;
    border-radius: 13px;
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
    border-radius: 13px;
    padding: 5px 10px;
    margin: 0px 10px;
  }
}

.section_headerblog_content_breadcrumbs-category {
  grid-column: 1/3;
  text-align: center;
}
</style>
