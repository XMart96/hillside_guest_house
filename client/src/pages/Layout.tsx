import { Header } from '@header/Header';
import { Footer } from '@footer/Footer';
import { Outlet } from 'react-router';
import { JSX } from 'react';
import { ContactUsNow } from '@/components/ContactUsNow';
import { Box } from '@chakra-ui/react';

export const Layout = (): JSX.Element => (
    <Box bg='wht'>
        <Header />
        <Outlet />
        <ContactUsNow />
        <Footer />
    </Box>
);
