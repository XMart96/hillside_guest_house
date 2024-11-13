import { Provider } from "@/components/ui/provider";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

const ProviderComponent = ({ children }) => (
    <Provider>
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    </Provider>
);

export default ProviderComponent;