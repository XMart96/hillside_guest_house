import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from '@header/Header';
import ContactUsNow from '@components/ContactUsNow';
import Footer from "@footer/Footer";

const Layout = () => (
    <Box>
        <Header />
        <Outlet />
        <ContactUsNow />
        <Footer />
    </Box>
);

export default Layout;