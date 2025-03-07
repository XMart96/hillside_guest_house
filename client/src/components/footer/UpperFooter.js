/*
*   FileName: UpperFooter.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The UpperFooter component renders the upper section of the footer with contact information, 
*   subscription box, and other relevant links. It uses the Wrap component for responsive layout.
*/

import { Box, Heading, Text } from "@chakra-ui/react";
import LogoText from "@components/LogoText";
import { phone, email } from '@/data';
import { useTranslation } from "react-i18next";
import ContactLinkItem from "@components/ContactLinkItem";
import { LuPhone, LuMail } from "react-icons/lu";
import UpperFooterItem from "@footer/UpperFooterItem";
import SubscribeBox from "@components/SubscribeBox";
import { WrapContainer } from "@components/layoutElements";

const UpperFooter = () => {
    const { t } = useTranslation(['contactInfo', 'footer']);

    return (
        <Box>
            <WrapContainer wrap='wrap' justify='center'>
                <UpperFooterItem flex='2'>
                    <LogoText />
                    <ContactLinkItem href={`tel:${phone}`} icon={LuPhone} text={phone} />
                    <ContactLinkItem href={`mailto:${email}`} icon={LuMail} text={email} />
                    <Text>{t('addressText')}</Text>
                </UpperFooterItem>
                <UpperFooterItem flex='1'>
                    <Heading size='xl'>{t('footer:news')}</Heading>
                    <Text>{phone}</Text>
                    <Text>{email}</Text>
                    <Text>dddd</Text>
                </UpperFooterItem>
                <UpperFooterItem flex='1'>
                    <Heading size='xl'>{t('footer:links')}</Heading>
                    <Text>{phone}</Text>
                    <Text>{email}</Text>
                    <Text>ddd</Text>
                </UpperFooterItem>
                <UpperFooterItem flex='2'>
                    <Heading size='xl'>{t('footer:subscribe')}</Heading>
                    <SubscribeBox />
                </UpperFooterItem>
            </WrapContainer>
        </Box>
    );
};

export default UpperFooter;