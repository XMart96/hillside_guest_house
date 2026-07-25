// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    routeRules: {
        '/': { prerender: true },
    },
    compatibilityDate: '2026-04-04',
    app: {
        head: {
            titleTemplate: '%s | Hillside Guest House',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicon-96x96.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },
    i18n: {
        strategy: 'prefix',
        defaultLocale: 'hy',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'ru', file: 'ru.json' },
            { code: 'hy', file: 'hy.json' },
        ],
    },
});
