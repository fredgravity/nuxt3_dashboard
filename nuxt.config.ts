// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '~/assets/css/main.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
        'process.env.DEBUG': false,
        },
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      modules: [
        [
          '@pinia/nuxt',
          {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
          },
        ],
      ],
      imports: {
        dirs: ['stores'],
      },
      // ssr: true,
      pages: true,

})
