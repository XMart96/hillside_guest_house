/*
*   FileName: Nav.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Nav component renders a navigation menu with links to different pages. 
*   It uses Chakra UI for styling and React Router's Link for navigation, along with translations from react-i18next.
*/

import { Link as ChakraLink, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Nav = ({ onClose }) => {
    const { t } = useTranslation(['links']);

    return (
        <Stack gap='5' direction={{ base: 'column', md: 'row' }}>
            {
                t('links', { returnObjects: true }).map(({ path, label }) => (
                    <ChakraLink 
                        as={Link} 
                        key={path} 
                        to={path}
                        color={{base: 'white', md: 'gry'}}
                        _hover={{ color: 'grn', textDecoration: 'none'}}
                        _focus={{ outline: 'none' }}
                        fontSize={{base: 'lg', md: 'md'}}
                        onClick={onClose}
                        transition='0.2s'
                    >
                        {t(label)}
                    </ChakraLink>
                ))
            }
        </Stack>
    );
};

export default Nav;