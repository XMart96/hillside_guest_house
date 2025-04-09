import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

export const system = createSystem(
    defaultConfig,
    defineConfig({
        theme: {
            tokens: {
                fonts: {
                    body: { value: 'Noto Sans, serif' },
                    logo: { value: 'Mr Dafoe, cursive' },
                    heading: { value: 'Noto Sans, serif' },
                },
                colors: {
                    blu: { value: '#0e2737' },
                    grn: { value: '#1cc3b2' },
                    gry: { value: '#636a76' },
                    gryBg: { value: '#ededed' },
                    wht: { value: '#fafafa' },
                    errorRed: { value: '#f87171' },
                },
            },
        },
    }),
);
