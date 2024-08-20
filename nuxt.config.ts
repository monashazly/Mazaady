

export default defineNuxtConfig({
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript :{
    typeCheck: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "vuetify-nuxt-module"],
  css:['~/assets/main.css'],
})


