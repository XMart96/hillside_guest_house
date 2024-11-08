import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { menuData } from "../../data";

const Nav = ({ onClose }) => (
    <Flex 
        gap='5' 
        align='start' 
        direction={{ base: 'column', md: 'row' }}
    >
        {
            menuData.map(i => (
                <ChakraLink 
                    as={Link} 
                    key={i.path} 
                    to={i.path}
                    color={{base: 'white', md: 'gry'}}
                    _hover={{ color: 'grn', textDecoration: 'none'}}
                    _focus={{ outline: 'none' }}
                    fontSize='lg'
                    onClick={onClose}
                >
                    {i.label}
                </ChakraLink>
            ))
        }
    </Flex>
);

export default Nav;