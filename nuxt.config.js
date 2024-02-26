export default {
  loading: {
    color: "#28a745",
    height: "3px",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vn-welcome-app',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/reset.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/commons.scss'
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Fontawesome: https://fontawesome.com/search?o=r&m=free
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // "@nuxtjs/auth-next",
    '@nuxtjs/style-resources',
    'portal-vue/nuxt',
    'bootstrap-vue/nuxt',
  ],

  // Axios Configuration
  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:8080/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
