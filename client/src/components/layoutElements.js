import { Flex, Box } from "@chakra-ui/react";

export const WrapContainer = ({ children, ...props }) => (
    <Flex 
        maxW="1100px" 
        w="100%" 
        mx="auto"
        px="5" 
        py="1" 
        {...props}
    >
        {children}    
    </Flex>
);

export const PageElemContainer = ({ children, ...props }) => (
    <Box
        w="100%"
        m='3' 
        p='5' 
        bg='white' 
        shadow='0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
        rounded='lg'
        {...props}
    >
        {children}
    </Box>
);