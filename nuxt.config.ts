// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@hypernym/nuxt-anime'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      externalApiUrl: process.env.EXTERNAL_API_URL
    }
  }
})
