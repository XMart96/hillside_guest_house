import { Box, useBreakpointValue } from "@chakra-ui/react";

import LogoText from "@components/LogoText";
import Drawer from "@header/Drawer";
import Nav from "@header/Nav";
import { WrapContainer } from "@components/layoutElements";

const LowerHeader = () => {
    const isMobile = useBreakpointValue({base: true, md: false});
    
    return (
        <Box bg='wht'>   
            <WrapContainer justify='space-between' align='center'>
                <LogoText />
                {!isMobile ? <Nav /> : <Drawer />}
            </WrapContainer>
        </Box>
    );
};

export default LowerHeader;