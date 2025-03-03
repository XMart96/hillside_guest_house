import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from '../header/Header';
import Footer from "../footer/Footer";

const Layout = () => (
    <Stack gap='0'>
        <Header />
        <Outlet />
        <Footer />
    </Stack>
);

export default Layout;