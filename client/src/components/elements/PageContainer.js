import { Flex } from "@chakra-ui/react";

const PageContainer = ({children, ...props}) => (
    <Flex 
        m='2.5' 
        p='2.5' 
        bg='white' 
        shadow='0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
        rounded='lg'
        maxW='1200px'
        w='100%'
        {...props}
    >
        {children}
    </Flex>
);

export default PageContainer;