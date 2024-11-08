import { Flex, useBreakpointValue } from "@chakra-ui/react";
import LogoText from "./LogoText";
import Drawer from "./Drawer";
import Nav from "./Nav";

const LowerHeader = () => {
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
        <Flex 
            bg='white' 
            px='5' 
            justify={{base: 'space-between', md: 'space-around'}} 
            align='center'
        >
            <Flex>
                <LogoText />
            </Flex>
            {!isMobile ? <Nav /> : <Drawer />}
        </Flex>
    );
};

export default LowerHeader;