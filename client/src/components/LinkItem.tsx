import { LinkItemProps } from '@/types';
import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

export const LinkItem = ({
    text,
    icon,
    url,
    disableHideIcon,
}: LinkItemProps) => (
    <ChakraLink
        asChild
        color='wht'
        _hover={{ color: 'grn', textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
        transition='0.2s'
    >
        <RouterLink to={url}>
            <Icon as={icon} fontSize='20px' />
            <Text hideBelow={disableHideIcon ? '' : 'md'}>{text}</Text>
        </RouterLink>
    </ChakraLink>
);
