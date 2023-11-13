// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
 
  devtools: { enabled: true },
  
  css: [
    // SCSS file in the project
    "~/assets/scss/style.scss", // you should add main.scss somewhere in your app
    'line-awesome/dist/line-awesome/css/line-awesome.css',
  ],

  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width,initial-scale=1",
      title: "TamaWiki",
      titleTemplate: "%s - Informacion para Tamers",
      meta: [{ name: "description", content: "Guias para la Comunidad de Tama Kingdom, un juego de ACKA GAMES" }],
    },
  },  

/*   runtimeConfig: {
      public: {
        wpUri: process.env.WP_URI,       
      },
  }, */
  

  },
);


