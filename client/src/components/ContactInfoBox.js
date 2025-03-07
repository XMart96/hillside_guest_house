import { Heading, Icon, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContactInfoBox = ({ icon, header, text, type, link = false }) => (
    <Flex direction='column' align='center' flex='1' color='gry' my='3' minW='150px' gap='2'>
        <Icon as={icon} color='grn' fontSize='40px' />
        <Heading size='lg'>{header}</Heading>
        { link ? 
            <ChakraLink
                as={Link} 
                to={type === "phone" ? `tel:${text}` : `mailto:${text}`}
                color='gry' 
                _hover={{ color: 'grn', textDecoration: 'none'}} 
                _focus={{outline: 'none'}}
                transition='0.2s'
            >
                <Text>{text}</Text>
            </ChakraLink> 
            : <Text textAlign='center'>{text}</Text>
        }
    </Flex>
);

export default ContactInfoBox;