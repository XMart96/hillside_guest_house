// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
    devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
    routeRules: {
        '/': { prerender: true },
    },
    compatibilityDate: '2026-04-04',
    app: {
        head: {
            titleTemplate: '%s | Hillside Guest House',
        },
    },
    i18n: {
        strategy: 'prefix',
        defaultLocale: 'hy',
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'ru', file: 'ru.json' },
            { code: 'hy', file: 'hy.json' },
        ],
    },
});
