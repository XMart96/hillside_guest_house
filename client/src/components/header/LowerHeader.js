import { Flex } from "@chakra-ui/react";
import LogoText from "./LogoText";
import Drawer from "./Drawer";
import LinkItem from "./LinkItem";

const LowerHeader = () => (
    <Flex bg='white' px='5' justify={{base: 'space-between', md: 'space-around'}} align='center'>
        <Flex>
            <LogoText />
        </Flex>
        <Flex gap='5' align='center' hideBelow='md'>
            <LinkItem text='Home' />
            <LinkItem text='About us' />
            <LinkItem text='Rooms' />
            <LinkItem text='Services' />
            <LinkItem text='News' />
            <LinkItem text='Contacts' />
        </Flex>
        <Drawer />
    </Flex>
);

export default LowerHeader;