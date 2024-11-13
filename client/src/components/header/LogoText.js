import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const LogoText = () => (
    <ChakraLink as={Link} to='/' _focus={{ outline: 'none' }}>
        <Text fontFamily='logo' color='gry' fontSize='5xl'>
            <Text as='span' color='grn'>H</Text>illside
        </Text>
    </ChakraLink>
);

export default LogoText;