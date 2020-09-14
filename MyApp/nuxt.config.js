module.exports = {
  ssr: false,
  srcDir: 'src',
  generate: {
    dir: 'wwwroot',
    routes: [
      // Generate static pages for static file servers handling dynamic routes
      ...[...Array(5).keys()].map(i => `/posts/${i + 1}`) //= [/posts/1, /posts/2, /posts/3, /posts/4, /posts/5]
    ]
  },
  plugins: [
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],
  buildModules: [
    ['@nuxtjs/vuetify'],
  ],
  /*
   ** Vuetify module configuration
   ** See https://github.com/nuxt-community/vuetify-module#optionspath
   */
  vuetify: {
    icons: {
      iconfont: 'mdi'
    },
    rtl: false,
    theme: {
      light: true
    },
    treeShake: true
  },
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
  css: ['~/assets/css/app.css'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'MyApp',
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
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
