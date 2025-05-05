<script lang="ts" setup>



</script>

<template>
  <!--     lista de categorias -->
  <ul class="section_headerblog_content_breadcrumbs-category">
    <li class="section_headerblog_content_breadcrumbs-category_item">
      <NuxtLink>
        categoria 1, 2,3
      </NuxtLink>
    </li>
  </ul>
  <!--     lista de categorias -->
</template>

<style lang="scss" scoped>
.section_headerblog_content_breadcrumbs-category {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px dotted #f5c15a8f;
}

//desaparece a los 600px
@media (min-width: 600px) {
  .section_headerblog_content_breadcrumbs-category {
    display: none;
  }
}
</style>
