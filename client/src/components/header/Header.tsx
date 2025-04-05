import { Box } from '@chakra-ui/react';
import { TopHeader } from '@header/TopHeader';
import { BottomHeader } from '@header/BottomHeader';
import { JSX } from 'react';

export const Header = (): JSX.Element => (
    <Box as='header'>
        <TopHeader />
        <BottomHeader />
    </Box>
);
