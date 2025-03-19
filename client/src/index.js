import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProviderComponent from '@components/ProviderComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProviderComponent>
            <App />
        </ProviderComponent>
    </React.StrictMode>
);