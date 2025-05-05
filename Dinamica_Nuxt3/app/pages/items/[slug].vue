<script lang="ts" setup>

</script>

<template>
  <div>
    <PageHeader />
    <section class="section_news_category">
      <div class="section_news_category_title">
        <h1 class="section_news_category_title_name">Informacion sobre:
          <span class="section_headerblog_content_breadcrumbs_item_link-title">categoria</span>
        </h1>
        <p class="section_news_category_title_description">mantente informado para mejorarar tu experiencia de juego.
        </p>
      </div>

      <BlogCardNewsCategory />

      <div class="post_pagination">
        <button class="post_pagination_button">Anterior</button>
        <span class="post_pagination_text">Página </span>
        <button class="post_pagination_button">Siguiente</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.post_pagination {
  margin: 3rem 0px;
  grid-column: 1/-1;
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
