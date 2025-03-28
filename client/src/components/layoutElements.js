import { Flex, Box } from "@chakra-ui/react";

import logger from "@/logger"; 

export const WrapContainer = ({ children, ...props }) => {
    !children && logger('assert', '107');
    
    return(
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
};

export const PageElemContainer = ({ children, ...props }) => {
    !children && logger('assert', '107');

    return(
        <Box
            w="100%"
            m='3' 
            p='5' 
            bg='wht' 
            shadow='0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
            rounded='lg'
            {...props}
        >
            {children}
        </Box>
    );
}

export const UpperFooterItemContainer = ({ children, flex }) => {
    !children && logger('assert', '107');

    return(
        <Flex 
            direction='column' 
            flex={flex} 
            gap='2' 
            p='5' 
            m='3' 
            maxW={{ base: "300px", lg: "100%" }}
        >
            {children}
        </Flex>
    );
}