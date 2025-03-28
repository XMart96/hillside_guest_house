import { Link as ChakraLink, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContactLinkItem = ({ href, icon, text, hide }) => (
    <ChakraLink
        as={Link} 
        to={href} 
        color='wht' 
        _hover={{ color: 'grn', textDecoration: 'none'}} 
        _focus={{ outline: 'none' }}
        transition='0.2s'
    >
        <Icon as={icon} fontSize='20px' /> 
        <Text hideBelow={hide ? "md": null}>{text}</Text>
    </ChakraLink>
);

export default ContactLinkItem;