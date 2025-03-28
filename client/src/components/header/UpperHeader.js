import { Box, HStack, IconButton } from "@chakra-ui/react";
import { LuPhone, LuMail, LuInstagram } from "react-icons/lu";

import ContactLinkItem from "@components/ContactLinkItem";
import LangMenu from "@header/LangMenu";
import { WrapContainer } from "@components/layoutElements";
import logger from "@/logger";

const UpperHeader = () => {
    const phone = process.env.REACT_APP_PHONE;
    !phone && logger('assert', '102');
    const email = process.env.REACT_APP_EMAIL;
    !email && logger('assert', '103');
    const instaURL = process.env.REACT_APP_INSTAGRAM_URL;
    !instaURL && logger('assert', '105');

    return(
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
};

export default UpperHeader;