<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';

// --- Importar la consulta específica desde tu archivo .js o .ts ---
// Asegúrate de que la ruta al archivo sea correcta desde la ubicación de tu componente.
import { allArticle } from '../graphql/queries'; // Ajusta la ruta según sea necesario

const { result, loading, error } = useQuery(allArticle, null, {
  // null si no hay variables
  fetchPolicy: 'cache-first', // O la política que necesites
});

const articles = computed(() => result.value?.articles ?? []);
</script>

<template>
  <div>
    <section class="section_slide">
      <div class="section_slide_content">
        <h1 class="section_slide_content_title">Veltix Adventure </h1>
        <p class="section_slide_content_description">Descubre poderosas criaturas.</p>
        <button type="button" class="section_slide_content_button" title="boton de descarga"
          aria-label="descargar desde playstore">
        </button>
      </div>
      <figure class="section_slide_image" title="ilustracion de un tama">
        <img class="section_slide_image_gamer" alt="criatura Tama"
          title="ilustracion de un tama con equipamiento de ataque y defensa" src="~/assets/images/pages/cf-5.webp" />
      </figure>
    </section>

    <section class="section_category-popular">
      <div class="section_category-popular_title">
        <img class="section_category-popular_title_img" alt="separador de seccion" title="Corona separadora se seccion"
          src="~/assets/images/icons-buttoms/title-purchase.webp" />
        <h2 class="section_category-popular_title_name">Bienvenido a un nuevo universo.</h2>
      </div>
      <div class="section_category-popular_content">
        <div class="section_category-popular_content-card">
          <img class="section_category-popular_content-card_img" alt="imagen Gameplay Tama"
            title="ilustracion de tama jugando" src="~/assets/images/pages/cf-1.webp" />
          <h3 class="section_category-popular_content-card_name">Griaturas</h3>
          <p class="section_category-popular_content-card_text">
            Encuentra y guía a las criaturas primordiales y despierta su poder.
          </p>
          <NuxtLink to="/items/gameplay" aria-label="link ir al lore" title="ir al Lore o historia Tama Kingdom"
            class="section_category-popular_content-card_link">
            <i class="las la-angle-right la-3x section_category-popular_content-card_link_icon"></i>
          </NuxtLink>
        </div>
        <div class="section_category-popular_content-card">
          <img class="section_category-popular_content-card_img" alt="imagen Lore Tama"
            title="ilustracion de tama viendo la Historia o lore tamakindon"
            src="~/assets/images/pages/historia.webp" />
          <h3 class="section_category-popular_content-card_name">Lore</h3>
          <p class="section_category-popular_content-card_text">
            Descubre las crónicas, reglas y desafíos del mundo.
          </p>
          <NuxtLink to="/items/lore" aria-label="link ir al lore" title="ir al Lore o historia Tama Kingdom"
            class="section_category-popular_content-card_link">
            <i class="las la-angle-right la-3x section_category-popular_content-card_link_icon"></i>
          </NuxtLink>
        </div>
        <div class="section_category-popular_content-card">
          <img class="section_category-popular_content-card_img" alt="imagen Economia Tama"
            title="ilustracion de  la economia de tamakingdom" src="~/assets/images/pages/anillo2.webp" />
          <h3 class="section_category-popular_content-card_name">Objetos</h3>
          <p class="section_category-popular_content-card_text">
            Forja y equipa artefactos embuidos de esencia y potencia tus
            criaturas.
          </p>
          <NuxtLink to="/items/economia" aria-label="link ir al lore" title="ir al Lore o historia Tama Kingdom"
            class="section_category-popular_content-card_link">
            <i class="las la-angle-right la-3x section_category-popular_content-card_link_icon"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section_hability">
      <div class="section_hability_title">
        <h2 class="section_hability_title_name">
          + Habilidades para tu aventura</h2>
        <p class="section_hability_title_description">
          Explora información detallada sobre comida, armas, gemas y más.
          ¡Domina el juego con nuestra guía completa!
        </p>
      </div>

      <div>
        <h1>Artículos</h1>
        <div v-if="loading"> Cargando artículos... </div>
        <div v-else-if="error">
          Error al cargar los artículos: {{ error.message }}
        </div>
        <ul v-else-if="articles.length > 0">
          <li v-for="article in articles" :key="article.documentId">
            <h2>{{ article.title }} ({{ article.slug }})</h2>
            <p>{{ article.description }}</p>
          </li>
        </ul>
        <div v-else> No se encontraron artículos. </div>
      </div>

      <div class="section_hability_content">
        <div class="section_hability_content-info">
          <p class="section_hability_content-info_data">
            <!-- Actualizado: 20 Agosto 2022 -->
          </p>
          <h3 class="section_hability_content-info_category"> Comida </h3>
        </div>
        <div class="section_hability_content_items">
          <PageCategoryComidaHome />
        </div>
      </div>
      <div class="section_hability_content">
        <div class="section_hability_content-info">
          <p class="section_hability_content-info_data">
            <!--  Actualizado: 13 Agosto 2022 -->
          </p>
          <h3 class="section_hability_content-info_category"> Armas </h3>
        </div>
        <div class="section_hability_content_items">
          <PageCategoryArmasHome />
        </div>
      </div>
      <div class="section_hability_content">
        <div class="section_hability_content-info">
          <p class="section_hability_content-info_data">
            <!-- Actualizado: 02 Agosto 2022 -->
          </p>
          <h3 class="section_hability_content-info_category"> Elixires </h3>
        </div>
        <div class="section_hability_content_items">
          <PageCategoryElixirHome />
        </div>
      </div>
    </section>

    <section class="section_news">
      <div class="section_news_title">
        <h2 class="section_news_title_name">Descubre las últimas noticias</h2>
        <p class="section_news_title_description">Mantente actualizado con nuestras novedades más recientes.</p>
      </div>
      <PageNewsHome />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section_news {
  display: block;
}
</style>
