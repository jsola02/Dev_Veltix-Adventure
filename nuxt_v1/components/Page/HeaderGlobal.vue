<script lang="ts" setup>

  defineProps<{
    title?: string;
  }>();
</script>

<template>
  <header class="cont_header"  title="Categories">     
        <nav class="cont_header_nav-logo">
          <NuxtLink class="cont_header_nav-logo_link" href="/#"  alt="Logo Tamawiki" title="logo tamakindom para recargar pagina de inicio">
            <img class="cont_header_nav-logo_link_img" 
            alt="Logo Tamawiki" 
            title="logo en forma de corona, comunidad TAMAKINGDOM" 
            src="~/assets/images/icons-buttoms/logo.webp"
            />
            <p class="cont_header_nav-logo_link_title">TamaWiki</p>
            <p v-if="title"> {{ title }}</p>
            <slot />
          </NuxtLink>
        </nav>
        <MenuTop />
    
  </header>
</template>

<style lang="scss" scoped>
</style>