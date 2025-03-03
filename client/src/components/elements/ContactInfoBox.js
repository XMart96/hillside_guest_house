import { Heading, Icon, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContactInfoBox = ({ icon, header, text, type, link = false }) => (
    <Stack alignItems='center' flex='1' color='gry' minW='150px' my='2.5' gap='2'>
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
    </Stack>
);

export default ContactInfoBox;