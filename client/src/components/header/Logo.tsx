import { JSX } from 'react';
import { Link as RouterLink } from 'react-router';

import { Link as ChakraLink, Image } from '@chakra-ui/react';

interface ILogoProps {
    onClose?: () => void;
}
export const Logo = ({ onClose }: ILogoProps): JSX.Element => (
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
