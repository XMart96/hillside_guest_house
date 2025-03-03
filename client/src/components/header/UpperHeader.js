/*
*   FileName: UpperHeader.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The UpperHeader component displays the contact information and social media links in the upper header.
*   It includes phone, email, Instagram, and a language menu.
*/

import { Box, Center, HStack, IconButton } from "@chakra-ui/react";
import { LuPhone, LuMail, LuInstagram } from "react-icons/lu";
import ContactLinkItem from "../elements/ContactLinkItem";
import LangMenu from "./LangMenu";
import { phone, email, instaURL } from "../../data";

const UpperHeader = () => (
    <Box w='100%' bg='blu'>
        <Center>
            <HStack px='5' py='1' justify='space-between' maxW='1100px' w='100%'>
                <HStack gap='8'>
                    <ContactLinkItem hide href={`tel:${phone}`} icon={LuPhone} text={phone} />
                    <ContactLinkItem hide href={`mailto:${email}`} icon={LuMail} text={email} />
                </HStack>
                <HStack gap='5'>
                    <ContactLinkItem 
                        href={instaURL}
                        icon={LuInstagram} 
                        text='Instagram'
                        as={IconButton}
                        hide
                    />
                    <LangMenu />
                </HStack>
            </HStack>
        </Center>
    </Box>
);

export default UpperHeader;