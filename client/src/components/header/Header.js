/*
*   FileName: Header.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Header component displays the upper and lower headers in the app using Chakra UI Stack.
*   The UpperHeader and LowerHeader components are rendered inside a Stack with no gap between them.
*/

import { Box } from "@chakra-ui/react"
import UpperHeader from "@header/UpperHeader";
import LowerHeader from "@header/LowerHeader";

const Header = () => (
    <Box>
        <UpperHeader />
        <LowerHeader />
    </Box>
);

export default Header;