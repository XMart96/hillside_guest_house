/*
*   FileName: LowerFooter.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The LowerFooter component renders the bottom section of the footer.
*   It includes copyright or legal information, displayed using the Rights component.
*/

import { Box, Center } from '@chakra-ui/react';
import Rights from '../elements/Rights';

const LowerFooter = () => (
    <Box w='100%'>
        <Center pb='5' px='5'>
            <Rights />
        </Center>
    </Box>
);

export default LowerFooter;