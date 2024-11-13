import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { nav } from "../../data";
import { useTranslation } from 'react-i18next';

const Nav = ({ onClose }) => {
    const { t } = useTranslation(['header']);

    return (
        <Flex 
            gap='5' 
            align='start' 
            direction={{ base: 'column', md: 'row' }}
        >
            {
                nav.map(i => (
                    <ChakraLink 
                        as={Link} 
                        key={i.path} 
                        to={i.path}
                        color={{base: 'white', md: 'gry'}}
                        _hover={{ color: 'grn', textDecoration: 'none'}}
                        _focus={{ outline: 'none' }}
                        fontSize={{base: 'lg', md: 'md'}}
                        onClick={onClose}
                    >
                        {t(i.label)}
                    </ChakraLink>
                ))
            }
        </Flex>
    );
};

export default Nav;