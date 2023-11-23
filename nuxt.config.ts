// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@hypernym/nuxt-anime', '@pinia/nuxt'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      externalApiUrl: process.env.EXTERNAL_API_URL
    }
  },
  app: {
    head: {
      title: 'VANSTORE | My Demo Online Shopping Store'
    }
  }
})
