import { DrawerTriggerProps } from '@/types';
import { Link as ChakraLink, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

export const Logo = ({ onClose }: DrawerTriggerProps) => (
    <ChakraLink asChild _focus={{ outline: 'none' }} display='block'>
        <RouterLink to='/'>
            <Image
                src='/assets/logo_dark.svg'
                alt='Hillside logo'
                boxSize='8rem'
                onClick={onClose}
            />
        </RouterLink>
    </ChakraLink>
);
