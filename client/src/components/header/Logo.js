/*
*   FileName: Logo.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Logo component renders the company logo as a clickable link that redirects to the homepage. 
*   It uses Chakra UI for styling and React Router's Link for navigation.
*/

import { Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = ({ onClose }) => (
    <ChakraLink as={Link} to='/' _focus={{ outline: 'none' }} display="block" aria-label="Go to homepage">
        <Image src='/assets/logo_dark.svg' alt="Hillside logo" boxSize='8rem' onClick={onClose} />
    </ChakraLink>
);

export default Logo;