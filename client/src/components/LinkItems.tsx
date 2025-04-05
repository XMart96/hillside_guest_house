import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router';

interface INavLinkItemProps {
    path: string;
    label: string;
    onClose?: () => void;
}
export const NavLinkItem = ({
    path,
    label,
    onClose,
}: INavLinkItemProps): JSX.Element => {
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

interface ILinkItemProps {
    icon?: IconType;
    disableHideIcon?: boolean;
    url: string;
    text: string;
}
export const LinkItem = ({
    icon,
    disableHideIcon,
    url,
    text,
}: ILinkItemProps): JSX.Element => (
    <ChakraLink
        asChild
        color='wht'
        _hover={{ color: 'grn', textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
        transition='0.2s'
    >
        <RouterLink to={url}>
            {icon && <Icon as={icon} fontSize='20px' />}
            <Text hideBelow={disableHideIcon ? '' : 'md'}>{text}</Text>
        </RouterLink>
    </ChakraLink>
);
