import { Image } from '@chakra-ui/react';
import logo from '../assets/logo_dark.svg';

const Logo = () => (
    <Image src={logo} alt="Hillside logo" w={{ base: '5rem', md: '6rem'}} mr='5' />
);

export default Logo;