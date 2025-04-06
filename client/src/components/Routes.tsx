import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from '@pages/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { RoomsPage } from '@/pages/RoomsPage';
import { SingleRoomPage } from '@/pages/SingleRoomPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { NewsPage } from '@/pages/NewsPage';
import { SingleNewsPage } from '@/pages/SingleNewsPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { BookPage } from '@/pages/BookPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { JSX } from 'react';

export const RoutesComponent = (): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='rooms' element={<RoomsPage />} />
                <Route path='rooms/:slug' element={<SingleRoomPage />} />
                <Route path='services' element={<ServicesPage />} />
                <Route path='news' element={<NewsPage />} />
                <Route path='news/:slug' element={<SingleNewsPage />} />
                <Route path='contacts' element={<ContactsPage />} />
                <Route path='book' element={<BookPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
