module.exports = {
  mode: 'spa',
  srcDir: 'src',
  generate: {
    dir: 'wwwroot',    
    routes: [
      // Generate static pages for static file servers handling dynamic routes
      ...[...Array(5).keys()].map(i => `/posts/${i+1}`) //= [/posts/1, /posts/2, /posts/3, /posts/4, /posts/5]
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],
  modules: ['@nuxtjs/proxy'],
  proxy: {
    '/json': 'http://localhost:5000/',
    '/auth': 'http://localhost:5000/',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
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
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
