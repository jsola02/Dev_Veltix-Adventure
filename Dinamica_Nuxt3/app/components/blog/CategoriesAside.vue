<script lang="ts" setup>
  import { useWpApi } from '~/composables/useWpApi';
  const { data: categories } = await useWpApi().getCategories<any>();
</script>

<template>
  <div class="section_main_aside_category">
    <h3 class="section_main_aside_category_title">Categorias</h3>
    <ul class="section_main_aside_category_list">
      <li class="section_main_aside_category_list_item">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="`/categories/${category.slug}`"
          {{category.name
          }}
          class="section_main_aside_category_list_item_link"
        >
          <span>{{ category.name }}</span
          ><span></span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .section_main_aside_category_list_item_link {
    padding-bottom: 0.3rem;
    margin-bottom: 0.6rem;
    border-bottom: 1px solid rgba(118, 110, 230, 0.3490196078);
  }
</style>
