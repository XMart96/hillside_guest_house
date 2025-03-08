/*
*   FileName: UpperFooterItem.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The UpperFooterItem component renders an individual item in the upper footer, 
*   providing a flexible layout for content like links, text, or other elements.
*   It uses Chakra UI's Flex component for flexible positioning and spacing.
*/

import { Flex } from "@chakra-ui/react";

const UpperFooterItem = ({ children, flex }) => (
    <Flex direction='column' flex={flex} gap='2' p='5' m='3' maxW={{ base: "300px", md: "100%" }}>
        {children}
    </Flex>
);

export default UpperFooterItem;