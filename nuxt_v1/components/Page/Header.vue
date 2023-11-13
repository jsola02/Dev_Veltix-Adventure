<script lang="ts" setup>
const { data: categories } = await useWpApi().getCategories<any>();
  defineProps<{
    title?: string;
  }>();

</script>
  
  <template>
  <section class="section_headerblog">
    <div class="section_headerblog_content">  
      <ul class="section_headerblog_content_breadcrumbs-category">  
        <li class="section_headerblog_content_breadcrumbs-category_item">        
          <MenuCategorias /> 
        </li>
      </ul>        
      <slot />  
    </div>
  </section>
</template>



<style lang="scss" scoped>


.section_headerblog_content_breadcrumbs-category_item{
  padding-bottom: 0px;
  margin-bottom: 0px;
}


</style>