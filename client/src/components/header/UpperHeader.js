/*
*   FileName: UpperHeader.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The UpperHeader component displays the contact information and social media links in the upper header.
*   It includes phone, email, Instagram, and a language menu.
*/

import { Box, HStack, IconButton } from "@chakra-ui/react";
import { LuPhone, LuMail, LuInstagram } from "react-icons/lu";
import ContactLinkItem from "@components/ContactLinkItem";
import LangMenu from "@header/LangMenu";
import { phone, email, instaURL } from "@/data";
import { WrapContainer } from "@components/layoutElements";

const UpperHeader = () => (
    <Box bg="blu">
        <WrapContainer justify='space-between'>
            <HStack gap="8">
                <ContactLinkItem hide href={`tel:${phone}`} icon={LuPhone} text={phone} />
                <ContactLinkItem hide href={`mailto:${email}`} icon={LuMail} text={email} />
            </HStack>
            <HStack gap="3.5">
                <ContactLinkItem 
                    href={instaURL}
                    icon={LuInstagram} 
                    text="Instagram"
                    as={IconButton}
                    hide
                />
                <LangMenu />
            </HStack>
        </WrapContainer>
    </Box>
);

export default UpperHeader;