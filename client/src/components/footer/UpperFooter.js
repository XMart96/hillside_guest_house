import { Box, Center, Heading, Text, Wrap } from "@chakra-ui/react";
import LogoText from "../elements/LogoText";
import { phone, email } from '../../data';
import { useTranslation } from "react-i18next";
import ContactLinkItem from "../elements/ContactLinkItem";
import { LuPhone, LuMail } from "react-icons/lu";
import UpperFooterItem from "./UpperFooterItem";
import SubscribeBox from "./SubscribeBox";

const UpperFooter = () => {
    const { t } = useTranslation(['contactInfo', 'footer']);

    return (
        <Box w='100%'>
            <Center>
                <Wrap maxW='1100px' alignItems='center' justify='center'>
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
                </Wrap>
            </Center>
        </Box>
    );
};

export default UpperFooter;