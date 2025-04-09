import { JSX } from 'react';

import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/app/store';
import i18n from '@/i18n';
import { Provider as ChakraProvider } from '@chakra/provider';

interface IProviderComponentProps {
    children: JSX.Element;
}

export const ProviderComponent = ({
    children,
}: IProviderComponentProps): JSX.Element => (
    <ReduxProvider store={store}>
        <ChakraProvider>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </ChakraProvider>
    </ReduxProvider>
);
