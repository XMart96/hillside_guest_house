/*
*   FileName: Header.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Header component displays the upper and lower headers in the app using Chakra UI Stack.
*   The UpperHeader and LowerHeader components are rendered inside a Stack with no gap between them.
*/

import { Stack } from "@chakra-ui/react"
import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

const Header = () => (
    <Stack as="header" gap='0'>
        <UpperHeader />
        <LowerHeader />
    </Stack>
);

export default Header;