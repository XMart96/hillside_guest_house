import { JSX } from 'react';

import { Box } from '@chakra-ui/react';
import { Rights } from '@components/Rights';
import { FooterWrapperContainer } from '@components/layoutElements';

export const BottomFooter = (): JSX.Element => (
    <Box>
        <FooterWrapperContainer>
            <Rights />
        </FooterWrapperContainer>
    </Box>
);
