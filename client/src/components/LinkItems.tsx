import { JSX } from 'react';

import { IconType } from 'react-icons';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router';

import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra/tooltip';
import { Btn } from '@components/ButtonItems';

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
    disableHideText?: boolean;
    url: string;
    text: string;
}
export const LinkItem = ({
    icon,
    disableHideText,
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
            <Text hideBelow={disableHideText ? '' : 'md'}>{text}</Text>
        </RouterLink>
    </ChakraLink>
);

interface IContactsItemsProps {
    url: string;
    text: string;
}
export const ContactsLinkItem = ({
    url,
    text,
}: IContactsItemsProps): JSX.Element => (
    <ChakraLink
        asChild
        color='gry'
        _hover={{ color: 'grn', textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
        transition='0.2s'
    >
        <RouterLink to={url}>
            <Text>{text}</Text>
        </RouterLink>
    </ChakraLink>
);

interface ISocialLinkItemProps {
    name: string;
    url: string;
}
export const SocialLinkItem = ({
    name,
    url,
}: ISocialLinkItemProps): JSX.Element => (
    <Tooltip showArrow content={name}>
        <ChakraLink asChild>
            <RouterLink to={url}>
                <Btn>
                    {name === 'WhatsApp' ? (
                        <FaWhatsapp />
                    ) : name === 'Telegram' ? (
                        <FaTelegram />
                    ) : (
                        ''
                    )}
                </Btn>
            </RouterLink>
        </ChakraLink>
    </Tooltip>
);

interface IButtonLinkItemProps {
    icon?: IconType;
    text: string;
    url: string;
}
export const ButtonLinkItem = ({
    icon,
    text,
    url,
}: IButtonLinkItemProps): JSX.Element => (
    <ChakraLink asChild _hover={{ textDecoration: 'none' }}>
        <RouterLink to={url}>
            <Btn>
                <Text>{text}</Text>
                {icon && <Icon as={icon} fontSize='20px' />}
            </Btn>
        </RouterLink>
    </ChakraLink>
);
