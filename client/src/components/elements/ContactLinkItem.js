/*
*   FileName: ContactLinkItem.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The ContactLinkItem component renders a clickable item, 
*   such as a contact link or social media icon with a text label.
*   It uses Chakra UI components and React Router's Link for navigation.
*/

import { Link as ChakraLink, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContactLinkItem = ({ href, icon, text, hide }) => (
    <ChakraLink
        as={Link} 
        to={href} 
        color='white' 
        _hover={{ color: 'grn', textDecoration: 'none'}} 
        _focus={{outline: 'none'}}
        transition='0.2s'
    >
        <Icon as={icon} fontSize='20px' /> 
        <Text hideBelow={hide ? "md": undefined}>{text}</Text>
    </ChakraLink>
);

export default ContactLinkItem;