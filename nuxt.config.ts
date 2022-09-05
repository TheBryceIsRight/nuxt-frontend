import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass', 
    'mdi/css/materialdesignicons.min.css'
  ],
  modules: [
    'nuxt-svgo',
  ],
  build: {
    transpile: ['vuetify'],
  },
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv',
    '@pinia/nuxt'
  ],
  googleFonts: {
    families: {
      Roboto: true,
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})