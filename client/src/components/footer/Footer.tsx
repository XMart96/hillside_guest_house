import { Box } from '@chakra-ui/react';
import { TopFooter } from '@footer/TopFooter';
import { BottomFooter } from '@footer/BottomFooter';
import { JSX } from 'react';

export const Footer = (): JSX.Element => (
    <Box as='footer' bg='blu'>
        <TopFooter />
        <BottomFooter />
    </Box>
);
