import { Box } from '@chakra-ui/react';
import HomePageForm from '@components/HomePageForm';

const HomePageBgForm = () => (
    <Box 
        position='relative'
        bgImage='url(/assets/room4/9-min.jpg)'
        bgSize='cover'
        backgroundPosition='center'
        minH='calc(100vh - 128px)'
    >
        <Box
            position="absolute"
            bottom="10"
            left="50%"
            transform="translateX(-50%)"
            bg="white"
            color="gry"
            rounded="lg"
            p="6"
            w={{ base: '95%', sm: '70%', md: 'auto' }}
            shadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        >
            <HomePageForm />
        </Box>
    </Box>
);

export default HomePageBgForm;