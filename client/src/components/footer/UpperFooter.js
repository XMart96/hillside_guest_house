import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { LuPhone, LuMail, LuLink } from "react-icons/lu";
import { Link } from 'react-router-dom';

import LogoText from "@components/LogoText";
import ContactLinkItem from "@components/ContactLinkItem";
import SubscribeBox from "@components/SubscribeBox";
import { WrapContainer, UpperFooterItemContainer } from "@components/layoutElements";
import logger from "@/logger";

const UpperFooter = () => {
    const ns = ['links', 'contactInfo', 'footer', 'news', 'rooms'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));
    
    const phone = process.env.REACT_APP_PHONE;
    !phone && logger('assert', '102');
    const email = process.env.REACT_APP_EMAIL;
    !email && logger('assert', '103');

    !i18n.exists('news:news') && logger('assert', '104');
    !i18n.exists('rooms:rooms') && logger('assert', '104');

    return (
        <Box>
            <WrapContainer wrap='wrap' justify='center' align='baseline' color='wht'>
                <UpperFooterItemContainer flex='2'>
                    <LogoText />
                    <ContactLinkItem href={`tel:${phone}`} icon={LuPhone} text={phone} />
                    <ContactLinkItem href={`mailto:${email}`} icon={LuMail} text={email} />
                    <Text>{t('contactInfo:addressText')}</Text>
                </UpperFooterItemContainer>
                <UpperFooterItemContainer flex='1'>
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
                </UpperFooterItemContainer>
                <UpperFooterItemContainer flex='2'>
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
                </UpperFooterItemContainer>
                <UpperFooterItemContainer flex='2'>
                    <SubscribeBox />
                </UpperFooterItemContainer>
            </WrapContainer>
        </Box>
    );
};

export default UpperFooter;