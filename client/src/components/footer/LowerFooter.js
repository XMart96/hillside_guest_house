/*
*   FileName: LowerFooter.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The LowerFooter component renders the bottom section of the footer.
*   It includes copyright or legal information, displayed using the Rights component.
*/

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