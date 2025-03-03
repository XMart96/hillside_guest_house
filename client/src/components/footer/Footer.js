/*
*   FileName: Footer.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Footer component renders the upper and lower footer sections using Chakra UI's Stack component.
*   It provides a structured layout for footer content, such as links, contact details, and copyright information.
*/

import { Stack } from '@chakra-ui/react';
import UpperFooter from './UpperFooter';
import LowerFooter from './LowerFooter';

const Footer = () => (
    <Stack as='footer' gap='0' bg='blu'>
        <UpperFooter />
        <LowerFooter />
    </Stack>
);

export default Footer;