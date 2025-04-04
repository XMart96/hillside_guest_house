import { NavLinkItemProps } from '@/types';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

export const NavLinkItem = ({ path, label, onClose }: NavLinkItemProps) => {
    return (
        <ChakraLink
            asChild
            color={{ base: 'wht', md: 'gry' }}
            _hover={{ color: 'grn', textDecoration: 'none' }}
            _focus={{ outline: 'none' }}
            fontSize={{ base: 'lg', md: 'md' }}
            transition='0.2s'
            onClick={onClose}
        >
            <RouterLink to={path}>{label}</RouterLink>
        </ChakraLink>
    );
};
