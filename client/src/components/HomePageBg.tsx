import { JSX } from 'react';

import { Box, Image } from '@chakra-ui/react';
import { HomePageForm } from '@components/HomePageForm';
import { HomePageFormContainer } from '@components/layoutElements';

export const HomePageBg = (): JSX.Element => (
    <Box position='relative' minH='calc(100vh - 128px)'>
        <Image
            src='/assets/room4/9-min.jpg'
            alt='Main background image'
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
        />
        <HomePageFormContainer>
            <HomePageForm />
        </HomePageFormContainer>
    </Box>
);
