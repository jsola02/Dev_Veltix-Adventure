import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs Veltix Adventure",
  description: "Documentacion de Veltix Adventure",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Demo", link: "/demo" },
      { text: "El Mundo", link: "/el-mundo" },

      { text: "Web Oficial", link: "/#" },
    ],

    sidebar: [
      {
        text: "Ecos Primordiales",
        items: [
          { text: "Historia", link: "/historia" },
          { text: "Jugador", link: "/jugador" },
          { text: "Criaturas", link: "/criaturas" },
          { text: "Batallas", link: "/batallas" },
          { text: "Equipo", link: "/equipo" },
          { text: "Objetos", link: "/objetos" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Demo", link: "/demo" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
