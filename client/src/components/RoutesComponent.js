import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@pages/Layout';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import RoomsPage from '@pages/RoomsPage';
import SingleRoomPage from '@pages/SingleRoomPage';
import ServicesPage from '@pages/ServicesPage';
import NewsPage from '@pages/NewsPage';
import SingleNewsPage from '@pages/SingleNewsPage';
import ContactsPage from '@pages/ContactsPage';
import BookNowPage from '@pages/BookNowPage';
import NotFoundPage from '@pages/NotFoundPage';

const RoutesComponent = () => (
    <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='rooms' element={<RoomsPage />} />
                <Route path='rooms/:id' element={<SingleRoomPage />} />
                <Route path='services' element={<ServicesPage />} />
                <Route path='news' element={<NewsPage />} />
                <Route path='news/:id' element={<SingleNewsPage />} />
                <Route path='contacts' element={<ContactsPage />} />
                <Route path='book' element={<BookNowPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default RoutesComponent;