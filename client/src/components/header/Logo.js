import { Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = ({ onClose }) => (
    <ChakraLink as={Link} to='/' _focus={{ outline: 'none' }} display="block" aria-label="Go to homepage">
        <Image src='/assets/logo_dark.svg' alt="Hillside logo" boxSize='8rem' onClick={onClose} />
    </ChakraLink>
);

export default Logo;