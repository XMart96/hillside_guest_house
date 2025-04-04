import { PropsWithChildren } from 'react';
import { Provider as ChakraProvider } from '@chakra/provider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export const ProviderComponent = ({ children }: PropsWithChildren) => (
    <ChakraProvider>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ChakraProvider>
);
