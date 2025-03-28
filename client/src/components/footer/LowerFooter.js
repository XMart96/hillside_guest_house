import { Box } from '@chakra-ui/react';

import { WrapContainer } from '@components/layoutElements';
import Rights from '@components/Rights';

const LowerFooter = () => (
    <Box>
        <WrapContainer justify='center' pb='5'>
            <Rights />
        </WrapContainer>
    </Box>
);

export default LowerFooter;