export default {
  ssr: false,
  srcDir: 'src',
  generate: {
    dir: 'wwwroot',
    routes: [
      // Generate static pages for static file servers handling dynamic routes
      ...[...Array(5).keys()].map(i => `/posts/${i + 1}`) //= [/posts/1, /posts/2, /posts/3, /posts/4, /posts/5]
    ]
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/app.css'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/proxy'],
  proxy: {
    '/json': {
      'target': 'https://localhost:5001/',
      'secure': false
    },
    '/auth': {
      'target': 'https://localhost:5001/',
      'secure': false
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
