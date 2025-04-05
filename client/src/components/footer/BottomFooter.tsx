import { Box } from '@chakra-ui/react';
import { Rights } from '@components/Rights';
import { FooterWrapperContainer } from '@components/layoutElements';
import { JSX } from 'react';

export const BottomFooter = (): JSX.Element => (
    <Box>
        <FooterWrapperContainer>
            <Rights />
        </FooterWrapperContainer>
    </Box>
);
