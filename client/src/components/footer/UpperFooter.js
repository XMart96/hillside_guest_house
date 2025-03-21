/*
*   FileName: UpperFooter.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The UpperFooter component renders the upper section of the footer with contact information, 
*   subscription box, and other relevant links. It uses the Wrap component for responsive layout.
*/

import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import LogoText from "@components/LogoText";
import { useTranslation } from "react-i18next";
import ContactLinkItem from "@components/ContactLinkItem";
import { LuPhone, LuMail, LuLink } from "react-icons/lu";
import UpperFooterItem from "@footer/UpperFooterItem";
import SubscribeBox from "@components/SubscribeBox";
import { WrapContainer } from "@components/layoutElements";
import { Link } from 'react-router-dom';

const UpperFooter = () => {
    const { t } = useTranslation(['links', 'contactInfo', 'footer', 'news', 'rooms']);
    const phone = process.env.REACT_APP_PHONE;
    const email = process.env.REACT_APP_EMAIL;

    return (
        <Box>
            <WrapContainer wrap='wrap' justify='center' align='baseline' color='wht'>
                <UpperFooterItem flex='2'>
                    <LogoText />
                    <ContactLinkItem href={`tel:${phone}`} icon={LuPhone} text={phone} />
                    <ContactLinkItem href={`mailto:${email}`} icon={LuMail} text={email} />
                    <Text>{t('contactInfo:addressText')}</Text>
                </UpperFooterItem>
                <UpperFooterItem flex='1'>
                    <Heading size='xl'>{t('footer:news')}</Heading>
                    {
                        t('news:news', {returnObjects: true}).slice().reverse().map((i, k) => (
                            <ChakraLink 
                                key={k} 
                                as={Link} 
                                to={`news${i.path}`} 
                                color='wht'
                                _hover={{ color: 'grn', textDecoration: 'none'}} 
                                _focus={{ outline: 'none' }}
                                transition='0.2s'
                            >
                                <LuLink /> {i.label}
                            </ChakraLink>
                        ))
                    }
                </UpperFooterItem>
                <UpperFooterItem flex='2'>
                    <Heading size='xl'>{t('footer:links')}</Heading>
                    {
                        t('rooms:rooms', {returnObjects: true}).map((i, k) => (
                            <ChakraLink 
                                key={k} 
                                as={Link} 
                                to={`rooms${i.path}`} 
                                color='wht' 
                                whiteSpace='nowrap'
                                _hover={{ color: 'grn', textDecoration: 'none'}} 
                                _focus={{ outline: 'none' }}
                                transition='0.2s'
                            >
                                <LuLink /> {i.header}
                            </ChakraLink>
                        ))
                    }
                </UpperFooterItem>
                <UpperFooterItem flex='2'>
                    <SubscribeBox />
                </UpperFooterItem>
            </WrapContainer>
        </Box>
    );
};

export default UpperFooter;