import { JSX } from 'react';

import { Box } from '@chakra-ui/react';
import { BottomHeader } from '@header/BottomHeader';
import { TopHeader } from '@header/TopHeader';

export const Header = (): JSX.Element => (
    <Box as='header'>
        <TopHeader />
        <BottomHeader />
    </Box>
);
