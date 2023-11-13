<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const navVisible = ref<boolean>(false);

    const toggleNav = (): void => {
      navVisible.value = !navVisible.value;
    };

    const closeNav = (): void => {
      navVisible.value = false;
    };

    return {
      navVisible,
      toggleNav,
      closeNav
    };
  }
})
</script>

<template>
<div>
  <button 
    id="abrir" 
    class="cont_header_nav-button_open"
    title="Boton para desplegar menu" 
    @click="toggleNav" 
    
  > 
    <i class="cont_header_nav-button_open_icon las la-hamburger la-3x"></i>
  </button>
  <nav class="cont_header_nav-menu" 
    id="nav"
    :class="{ visible: navVisible }">
    <button 
        class="cont_header_nav-button_close" 
        id="cerrar"
        title="Boton para desplegar menu"
        @click="closeNav"   
    >
        <i class="cont_header_nav-button_close_icon las la-times la-3x"></i>      
      </button>

    <ul class="cont_header_nav-menu_list">
      <li class="cont_header_nav-menu_list_item">
        <NuxtLink 
        :class="$route.path === '/' ? 'active' : ''"
        class="cont_header_nav-menu_list_item_link" 
        title="link a pagina Inicio" 
        to="/">Inicio
        </NuxtLink>
      </li>
      <li class="cont_header_nav-menu_list_item">
        <NuxtLink 
          :class="$route.path === '/items/noticias/' ? 'active' : ''"  
          class="cont_header_nav-menu_list_item_link" 
          title="link pagina principal de Economia del juego"
          to="/items/noticias/">Noticias</NuxtLink>
      </li>
      
      <li class="cont_header_nav-menu_list_item">
        <NuxtLink 
          :class="$route.path === '/items/economia/' ? 'active' : ''"
          class="cont_header_nav-menu_list_item_link" 
          title="link pagina principal de Economia del juego"
          to="/items/economia/">Economia</NuxtLink>
      </li>
      
      
    </ul>

    <MenuCategoriasToogle />
  </nav>

</div>
  
</template>

<style lang="scss" scoped>
.active {
  border: 1px solid #EFAA1C;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  border-bottom-width: 3px;
  
}

.cont_header {
  top: 0;
  z-index: 100;
  position: sticky;
  background: #211f8f;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;  
  box-shadow: 10px 5px 5px rgba(56, 55, 55, 0.065);

  &_nav {
    padding: 1rem 1rem; 
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo {
      display: flex;
      &_link {
        text-decoration: none;
        color: #fff;
        font-family: 'Bebas Neue', sans-serif;;
        font-weight: 700;
        padding-left: 16px;
        padding-top: 8px;

        &_img {
          width: 50px;
          height: 38.0px;
          margin-left: 0.8rem;
          margin-top: 0px;
        }

        &_title {
          margin-top: 0px;
          font-family: 'Montserrat Alternates', sans-serif;
          font-size: 0.8rem;
          padding-left: 3px;
        }
      }
    }

    &-menu {  
      padding-top: 12px;
      padding-right: 14px;  
      &_list {
        display: flex;
        list-style: none;
        gap: 1rem; 
        &_item {
          padding: 5px 10px;       
          &_link {
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 500;
            letter-spacing: 1px;
            text-decoration: none;
            color: #fff;
            padding: 5px 10px;
          }
        }        
      }
    }

    &-button_open {
      display: none; 
      padding-right: 16px;
      &_icon {
        color: aliceblue;
        margin-top: 10px; 
        background: transparent;
        font-size: 2.5em;
      }
    }

    &-button_close {
      display: none;
      &_icon {
        color: aliceblue;
        margin-top: 10px;  
        background: transparent;  
        font-size: 2.5em; 
      }
    }
  }

  @media screen and (max-width: 600px) {
    .cont_header_nav-button_open,
    .cont_header_nav-button_close {
      display: block;
      border: 0;
      font-size: 1.25rem;
      background-color: transparent;
      cursor: pointer;        
    }
    
    .cont_header_nav-button_open {
      color: #1c1c1c;     
    }
  
    .cont_header_nav-button_close {
        color: #ececec;
    }
  
    .cont_header_nav-menu {
      padding-top: 12px;
      padding-right: 14px;  
            
      opacity: 0;
      visibility: hidden;   
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      position: absolute;   
      top: 0; 
      right: 0;
      background-color: #0c024b;
      padding: 2rem;
      bottom: 0;
      box-shadow: 0 0 0 100vmax rgba(24, 8, 95, 0.568);
      width: 35%;
    } 
    .cont_header_nav-menu.visible {
      opacity: 1;
      visibility: visible;
      padding-top: 0px;
      padding-right: 8px;
      background: rgb(22 3 81);
      height: 100vh;
    }   
  
    .cont_header_nav-menu_list {
      flex-direction: column; 
    }
  
    .cont_header_nav-menu_list_item_link {
      color: #ecececec;  
    }
  }
  }
</style>
