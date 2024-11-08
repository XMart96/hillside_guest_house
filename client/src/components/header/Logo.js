import { Image, Link as ChakraLink } from '@chakra-ui/react';
import logo from '../../assets/logo_dark.svg';
import { Link } from 'react-router-dom';

const Logo = () => (
    <ChakraLink as={Link} to='/' _focus={{ outline: 'none' }}>
        <Image src={logo} alt="Hillside logo" w='8rem' />
    </ChakraLink>
);

export default Logo;