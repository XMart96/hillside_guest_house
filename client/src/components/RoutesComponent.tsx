import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from '@pages/Layout';
import { HomePage } from '@/pages/HomePage';

export const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='*' element={<h1>not found page</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
