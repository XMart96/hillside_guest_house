import { JSX } from 'react';

import { Box } from '@chakra-ui/react';
import { BottomFooter } from '@footer/BottomFooter';
import { TopFooter } from '@footer/TopFooter';

export const Footer = (): JSX.Element => (
    <Box as='footer' bg='blu'>
        <TopFooter />
        <BottomFooter />
    </Box>
);
