/*
*   FileName: LowerHeader.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The LowerHeader component displays the bottom part of the header, which includes the logo, navigation, 
*   and a drawer for mobile view. It uses Chakra UI components for layout and responsive design.
*/

import { Box, Center, HStack, useBreakpointValue } from "@chakra-ui/react";
import LogoText from "../elements/LogoText";
import Drawer from "./Drawer";
import Nav from "./Nav";

const LowerHeader = () => {
    const isMobile = useBreakpointValue({base: true, md: false});
    
    return (
        <Box w='100%' bg='white'>   
            <Center>
                <HStack px='5' justify='space-between' maxW='1100px' w='100%'>
                    <LogoText />
                    {!isMobile ? <Nav /> : <Drawer />}
                </HStack>
            </Center>
        </Box>
    );
};

export default LowerHeader;