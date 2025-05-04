<script lang="ts" setup>
  import { useWpApi } from '~/composables/useWpApi';
  const { data: categories } = await useWpApi().getCategories<any>();
  defineProps<{
    title?: string;
  }>();
</script>

<template>
  <section class="section_headerblog">
    <div class="section_headerblog_content">
      <MenuCategorias />
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section_headerblog_content_breadcrumbs-category_item {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
</style>
