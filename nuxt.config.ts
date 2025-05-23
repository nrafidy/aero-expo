// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://localhost:3001",
    },
  },

  app: {
    // baseURL: "/aero-expo", // 👈 this should match your repo name
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  colorMode: {
    preference: "light",
    fallback: "light",
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "nuxt-aos",
  ],

  i18n: {
    defaultLocale: "fr",
    strategy: "no_prefix",
    locales: [
      {
        code: "fr",
        name: "French",
        file: "fr.json",
        emoji: "twemoji:flag-france",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        emoji: "twemoji:flag-for-flag-united-states",
      },
    ],
  },

  aos: {
    duration: 700,
  },

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
});
