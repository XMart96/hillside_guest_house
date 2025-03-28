import { Link as ChakraLink, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import logger from "@/logger";

const Nav = ({ onClose }) => {
    const ns = ['links'];
    const { i18n, t } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    return (
        <Stack gap='5' direction={{ base: 'column', md: 'row' }}>
            {
                t('links', { returnObjects: true }).map(({ path, label }) => (
                    <ChakraLink 
                        as={Link} 
                        key={path} 
                        to={path}
                        color={{base: 'wht', md: 'gry'}}
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