import { Flex } from '@chakra-ui/react';
import image from '../../assets/room4/9-min.jpg';
import HomePageForm from './HomePageForm';

const HomePageBgForm = () => (
    <Flex 
        position='relative'
        bgImage={`url(${image})`}
        bgSize='cover'
        backgroundPosition='center'
        minH='calc(100vh - 120px)'
    >
        <Flex
            position="absolute"
            bottom="10"
            left="50%"
            transform="translateX(-50%)"
            bg="white"
            color="gry"
            rounded="lg"
            p="6"
            justify="center"
            w={{ base: '95%', sm: '70%', md: 'auto' }}
            shadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        >
            <HomePageForm />
        </Flex>
    </Flex>
);

export default HomePageBgForm;