import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from '../header/Header';

const Layout = () => (
    <Flex direction='column'>
        <Header />
        <Outlet />
    </Flex>
);

export default Layout;