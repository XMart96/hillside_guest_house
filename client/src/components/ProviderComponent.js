import { Provider } from "@/components/ui/provider";
import system from "../theme";

const ProviderComponent = ({ children }) => (
    <Provider value={system}>
        {children}
    </Provider>
);

export default ProviderComponent;