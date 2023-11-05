// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: [
    '~/assets/styling/main.css',
    'primeicons/primeicons.css',
    'primevue/resources/themes/lara-light-indigo/theme.css'
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@hebilicious/vue-query-nuxt',
    '@vee-validate/nuxt'
  ],
  build: {
    transpile: ['primevue']
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || '/'
    }
  },
  routeRules: {
    '/admin/**': { ssr: false }
  }
})
