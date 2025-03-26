import { Provider as ReduxProvider } from 'react-redux';
import store from '@/app/store';
import { Provider as ChakraProvider } from "@components/ui/provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

store.subscribe(() => console.log('Redux Store', store.getState().calendarForm));

const ProviderComponent = ({ children }) => (
    <ReduxProvider store={store}>
        <ChakraProvider>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </ChakraProvider>
    </ReduxProvider>
);

export default ProviderComponent;