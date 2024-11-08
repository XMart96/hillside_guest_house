import { Flex } from "@chakra-ui/react";
import LinkItem from "./LinkItem";

const Nav = () => (
    <Flex 
        gap='6' 
        align='start' 
        direction={{ base: 'column', md: 'row' }}
    >
        <LinkItem text='Home' />
        <LinkItem text='About us' />
        <LinkItem text='Rooms' />
        <LinkItem text='Services' />
        <LinkItem text='News' />
        <LinkItem text='Contacts' />
    </Flex>
);

export default Nav;