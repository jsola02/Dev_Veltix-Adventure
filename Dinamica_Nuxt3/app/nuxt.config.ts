// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],
  css: [
    // SCSS file in the project
    '~/assets/css/style.scss', // you should add main.scss somewhere in your app
    'line-awesome/dist/line-awesome/css/line-awesome.css',
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
      },
    },
  },

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width,initial-scale=1',
      title: 'TamaWiki',
      titleTemplate: '%s - Informacion para Tamers',
      meta: [
        {
          name: 'description',
          content:
            'Guias para la Comunidad de Tama Kingdom, un juego de ACKA GAMES',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },

  compatibilityDate: '2025-04-26',
});
