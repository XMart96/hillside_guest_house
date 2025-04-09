import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from '@/App.tsx';
import { ProviderComponent } from '@components/Provider.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProviderComponent>
            <App />
        </ProviderComponent>
    </StrictMode>,
);
