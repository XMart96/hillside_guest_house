import { Box } from '@chakra-ui/react';
import { Rights } from '@components/Rights';
import { FooterWrapperContainer } from '@components/layoutElements';

export const BottomFooter = () => (
    <Box>
        <FooterWrapperContainer>
            <Rights />
        </FooterWrapperContainer>
    </Box>
);
