export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hspace',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/theme-dark.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/Vuelidate', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  vuetify: {
    treeshake: true,
    defaultAssets: {
      font: {
        family: 'Gotham'
      }
    },
    customVariables: ['~/sass/variables.scss'],
    theme: {
      dark: false
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  fontawesome: {
    icons: []
  },
  cloudinary: {
    // cloudinary.utils.api_sign_request(params_to_sign, api_secret)
    cloudName: 'kemisolaola',
    apiKey: '297187167734652',
    apiSecret: '5BUxbxmZvMOLvf4aXbw-5Jwme3g'
  }
}
