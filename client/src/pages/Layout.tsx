import { Header } from '@header/Header';
import { Footer } from '@footer/Footer';
import { Outlet } from 'react-router';

export const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
