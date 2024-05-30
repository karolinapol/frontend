// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {"@": resolve(__dirname, '/')},
  css: ["~/assets/main.scss"],
  routeRules: {
    'articles': {
        proxy: { to: "http://127.0.0.1:8000/api/data/", },
    }
  }
})
