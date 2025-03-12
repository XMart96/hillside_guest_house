const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@header': path.resolve(__dirname, '@components/header'),
            '@footer': path.resolve(__dirname, '@components/footer'),
            '@pages': path.resolve(__dirname, '@components/pages'),
            '@book': path.resolve(__dirname, '@components/book')
        },
    },
};