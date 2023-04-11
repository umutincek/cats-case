export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "cats-case",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    firebaseLoginUrl:
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
    firebaseApiKey: "AIzaSyAAC0D8hQ1bOW76bEw0Kjrz3XHEyL1Sy8o",
    randomCatUrl: "https://api.thecatapi.com/v1/images/search",
  },
};
