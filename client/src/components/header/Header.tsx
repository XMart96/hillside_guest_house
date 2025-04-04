import { Box } from '@chakra-ui/react';
import { TopHeader } from '@header/TopHeader';
import { BottomHeader } from '@header/BottomHeader';

export const Header = () => (
    <Box as='header'>
        <TopHeader />
        <BottomHeader />
    </Box>
);
