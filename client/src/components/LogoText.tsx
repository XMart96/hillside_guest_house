import { JSX } from 'react';

import { Link as RouterLink } from 'react-router';

import { Link as ChakraLink, Text } from '@chakra-ui/react';

export const LogoText = (): JSX.Element => (
    <ChakraLink asChild textDecoration='none' _focus={{ outline: 'none' }}>
        <RouterLink to='/'>
            <Text fontFamily='logo' color='gry' fontSize='5xl'>
                <Text as='span' color='grn'>
                    H
                </Text>
                illside
            </Text>
        </RouterLink>
    </ChakraLink>
);
