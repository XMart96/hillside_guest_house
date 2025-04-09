import { JSX } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import { AboutPage } from '@/pages/AboutPage';
import { BookPage } from '@/pages/BookPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { HomePage } from '@/pages/HomePage';
import { NewsPage } from '@/pages/NewsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RoomsPage } from '@/pages/RoomsPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { SingleNewsPage } from '@/pages/SingleNewsPage';
import { SingleRoomPage } from '@/pages/SingleRoomPage';
import { Layout } from '@pages/Layout';

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
