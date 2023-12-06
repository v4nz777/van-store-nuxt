// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@hypernym/nuxt-anime', '@pinia/nuxt', 'nuxt-icon'],
  typescript: {
    typeCheck: false
  },
  runtimeConfig: {
    paypalSecret: process.env.PAYPAL_SECRET,
    public: {
      externalApiUrl: process.env.EXTERNAL_API_URL,
      paypalClientId: process.env.PAYPAL_CLIENT_ID
    }
  },
  app: {
    head: {
      title: 'VANSTORE | My Demo Online Shopping Store'
    }
  },
  nitro: {
    firebase: {
      gen: 2
    }
  },
  plugins: [
   
  ]
})
