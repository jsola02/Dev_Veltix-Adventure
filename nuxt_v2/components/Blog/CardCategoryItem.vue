<script lang="ts" setup>

const { image, slug, title} = defineProps<{
  image?: string;
  slug?: string;
  title?: string; 

}>();
</script>


<template>
    <div>
      <NuxtLink 
        :to="`/items/posts/${slug}`"
        >
        <img :src="image" 
        class="section_hability_content_items_img"              
        title="ultimo Item Actualizado>"
        />
      </NuxtLink>
      
    </div>   

</template>


<style lang="scss" scoped></style>