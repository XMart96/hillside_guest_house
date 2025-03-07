const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@header': path.resolve(__dirname, 'src/components/header'),
            '@footer': path.resolve(__dirname, 'src/components/footer'),
            '@pages': path.resolve(__dirname, 'src/components/pages')
        },
    },
};