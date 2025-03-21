import { Box } from '@chakra-ui/react';
import HomePageForm from '@components/HomePageForm';
import { PageElemContainer } from '@components/layoutElements';

const HomePageBgForm = () => (
    <Box 
        position='relative'
        bgImage='url(/assets/room4/9-min.jpg)'
        bgSize='cover'
        backgroundPosition='center'
        minH='calc(100vh - 128px)'
    >
        <PageElemContainer
            position='absolute'
            color='gry'
            w={{ base: 'inherit', md: '95%' }}
            bottom='10'
            left="calc(50% - 12px )"
            transform="translateX(-50%)"
            maxW='670px'
        >
            <HomePageForm />
        </PageElemContainer>
    </Box>
);

export default HomePageBgForm;