import { Box } from '@chakra-ui/react';
import { TopFooter } from '@footer/TopFooter';
import { BottomFooter } from '@footer/BottomFooter';

export const Footer = () => (
    <Box as='footer' bg='blu'>
        <TopFooter />
        <BottomFooter />
    </Box>
);
