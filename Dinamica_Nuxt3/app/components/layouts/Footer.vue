<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-grid-text">
        <h2 class="footer-grid-text_title">"Un reino lleno de aventuras"</h2>
        <p class="footer-grid-text_description">Descubre a los Tamas, son el núcleo y la esencia del mágico mundo de
          Tama Kingdom. Son adorables y poderosas criaturas coleccionables.</p>
      </div>
      <div class="footer-grid-social">
        <h2 class="footer-grid-social_title">Partners</h2>
        <div class="footer-grid-social_images">
          <a class="footer-grid-social_images_link" href="#">
            <img class="footer-grid-social_images_link-img" alt="logotipo partner Acka Games "
              title="logotipo contrate blanco de Acka Games" src="@/assets/images/pages/isotipo_blanco.png" />
          </a>

        </div>
      </div>

      <div class="footer-grid-menu">
        <h2 class="footer-grid-menu_title">Menu</h2>
        <ul class="footer-grid-menu_list">
          <li class="footer-grid-menu_list_item">
            <NuxtLink class="footer-grid-menu_list_item_link" to="/">Inicio</NuxtLink>
          </li>
          <li class="footer-grid-menu_list_item">
            <NuxtLink class="footer-grid-menu_list_item_link" to="/">Noticias</NuxtLink>
          </li>
          <li class="footer-grid-menu_list_item">
            <NuxtLink class="footer-grid-menu_list_item_link" to="/items/noticias/">Economía</NuxtLink>
          </li>
          <li class="footer-grid-menu_list_item">
            <NuxtLink class="footer-grid-menu_list_item_link" to="/items/economia/">Lore</NuxtLink>
          </li>
          <li class="footer-grid-menu_list_item">
            <NuxtLink class="footer-grid-menu_list_item_link" to="/">Estadísticas</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">
      <p class="footer-copyright_text">© Todos los derechos reservados 2025. Veltix Adventure</p>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped></style>
