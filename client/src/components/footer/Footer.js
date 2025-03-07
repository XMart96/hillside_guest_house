/*
*   FileName: Footer.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Footer component renders the upper and lower footer sections using Chakra UI's Box component.
*   It provides a structured layout for footer content, such as links, contact details, and copyright information.
*/

import { Box } from '@chakra-ui/react';
import UpperFooter from '@footer/UpperFooter';
import LowerFooter from '@footer/LowerFooter';

const Footer = () => (
    <Box as='footer' bg='blu'>
        <UpperFooter />
        <LowerFooter />
    </Box>
);

export default Footer;