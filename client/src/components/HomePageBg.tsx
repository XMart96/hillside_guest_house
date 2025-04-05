import { Box } from '@chakra-ui/react';
import { HomePageForm } from '@components/HomePageForm';
import { JSX } from 'react';

export const HomePageBg = (): JSX.Element => (
    <Box
        position='relative'
        bgImage='url(/assets/room4/9-min.jpg)'
        bgSize='cover'
        backgroundPosition='center'
        minH='calc(100vh - 128px)'
    >
        <HomePageForm />
    </Box>
);
