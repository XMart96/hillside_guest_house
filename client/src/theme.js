import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    globalCss: {
        'svg': {
            fontSize: '1.25em'
        }
    },
    theme: {
        tokens: {
            fonts: {
                body: { value: 'Noto Sans, serif' },
                logo: { value: 'Mr Dafoe, cursive' }
            },
            colors: {
                blu: { value: '#0e2737' },
                grn: { value: '#1cc3b2' },
                gry: { value: '#636a76' }
            }
        }
    }
});

const system = createSystem(defaultConfig, config);

export default system;