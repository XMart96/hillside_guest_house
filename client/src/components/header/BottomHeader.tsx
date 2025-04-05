import { Box, useBreakpointValue } from '@chakra-ui/react';
import { LogoText } from '@components/LogoText';
import { HeaderWrapperContainer } from '@components/layoutElements';
import { SideBar } from '@header/SideBar';
import { Nav } from '@header/Nav';
import { JSX } from 'react';

export const BottomHeader = (): JSX.Element => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box bg='wht'>
            <HeaderWrapperContainer>
                <LogoText />
                {isMobile ? <SideBar /> : <Nav />}
            </HeaderWrapperContainer>
        </Box>
    );
};
