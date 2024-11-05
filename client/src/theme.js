import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                hillside: {
                    blu: { value: '#0e2737' }
                }
            }
        }
    }
});

const system = createSystem(defaultConfig, config);

export default system;