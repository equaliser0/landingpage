// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: 'The Crowned Lion',
  srcDir: './app',
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
  ],
  plugins: [
    { src: '~/plugins/aos.ts', mode: 'client' },
    { src: '~/plugins/scrollBehavior.ts', mode: 'client' },
    { src: '~/plugins/markdown.ts', mode: 'client' },
    { src: '~/plugins/multiselect.ts', mode: 'client' },
  ],
  nitro: {
    serverAssets: [
      {
        baseName: '',
        dir: 'uploads',
      },
    ],
  },
  auth: {
    // origin: '*',
    globalAppMiddleware: true,
    enableSessionRefreshPeriodically: 5000,
    enableSessionRefreshOnWindowFocus: true,
    globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: '/' // Where authenticated user will be redirected to by default
    }
  },
  tailwindcss: { exposeConfig: true },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  // vite: {
  //   server: { // https://github.com/nuxt/nuxt/issues/12748#issuecomment-1397234566
  //     https: {
  //       // key: fs.readFileSync('.cert/localhost-key.pem'),
  //       // cert: fs.readFileSync('.cert/localhost-cert.pem'),
  //     },
  //     hmr: {
  //       // protocol: 'wss'
  //     }
  //   }
  // },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'The Crowned Lion',
      short_name: 'CrownedLion',
      theme_color: '#66cc8a',
      icons: [
        {
          src: 'favicon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'favicon.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'favicon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  }
})
