import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UpperHeaderItem = ({ href, icon, text }) => (
    <ChakraLink
        as={Link} 
        to={href} 
        color='white' 
        _hover={{ color: 'grn', textDecoration: 'none'}} 
        _focus={{outline: 'none'}}
        transition='0.2s'
    >
        {icon} 
        <Text hideBelow='md'>{text}</Text>
    </ChakraLink>
);

export default UpperHeaderItem;