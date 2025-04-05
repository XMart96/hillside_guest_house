import { Header } from '@header/Header';
import { Footer } from '@footer/Footer';
import { Outlet } from 'react-router';
import { JSX } from 'react';

export const Layout = (): JSX.Element => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
