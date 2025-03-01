import { Flex} from '@chakra-ui/react';
import image from '../../assets/room4/9-min.jpg';
import MainPageForm from '../elements/MainPageForm';

const HomePage = () => (
    <Flex 
        position="relative"
        flex='1'
        bgImage={`url(${image})`}
        bgSize='cover'
        backgroundPosition='center'
    >
        
        <Flex
            position="absolute"
            bottom="10"
            left="50%"
            transform="translateX(-50%)"
            bg="white"
            color="gry"
            rounded="2xl"
            p="6"
            justify="center"
            w={{ base: '95%', sm: '70%', md: 'auto' }}
            shadow="md"
        >
            <MainPageForm />
        </Flex>
    </Flex>
);

export default HomePage;