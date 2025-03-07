/*
*   FileName: LowerHeader.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The LowerHeader component displays the bottom part of the header, which includes the logo, navigation, 
*   and a drawer for mobile view. It uses Chakra UI components for layout and responsive design.
*/

import { Box, useBreakpointValue } from "@chakra-ui/react";
import LogoText from "@components/LogoText";
import Drawer from "@header/Drawer";
import Nav from "@header/Nav";
import { WrapContainer } from "@components/layoutElements";

const LowerHeader = () => {
    const isMobile = useBreakpointValue({base: true, md: false});
    
    return (
        <Box bg='white'>   
            <WrapContainer justify='space-between'>
                <LogoText />
                {!isMobile ? <Nav /> : <Drawer />}
            </WrapContainer>
        </Box>
    );
};

export default LowerHeader;