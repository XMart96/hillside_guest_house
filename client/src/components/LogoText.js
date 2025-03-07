/*
*   FileName: LogoText.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The LogoText component renders the app's logo as a clickable link that redirects to the homepage. 
*   It uses Chakra UI for styling and React Router's Link for navigation.
*/

import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const LogoText = () => (
    <ChakraLink as={Link} to='/' textDecoration='none' _focus={{ outline: 'none' }}>
        <Text fontFamily='logo' color='gry' fontSize='5xl'>
            <Text as='span' color='grn'>H</Text>illside
        </Text>
    </ChakraLink>
);

export default LogoText;