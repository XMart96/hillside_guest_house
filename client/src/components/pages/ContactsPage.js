/*
*   FileName: ContactsPage.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The ContactsPage component renders the contact information section of the website, 
*   including phone, email, working hours, address, and an interactive map.
*   The page utilizes components like HeaderSection, ContactInfoBox, and YandexMaps.
*/

import { Box, Wrap } from "@chakra-ui/react";
import HeaderSection from "@components/HeaderSection";
import YandexMaps from "@components/YandexMaps";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import ContactInfoBox from "@components/ContactInfoBox";
import { useTranslation } from "react-i18next";
import { 
    WrapContainer, 
    PageElemContainer
} from "@components/layoutElements";

const ContactsPage = () => {
    const { t } = useTranslation(['contactInfo']);
    const phone = process.env.REACT_APP_PHONE;
    const email = process.env.REACT_APP_EMAIL;
    
    const iconsInfo = [
        {
            icon: LuPhone,
            header: t('phone'),
            text: phone,
            type: 'phone',
            link: true
        },
        {
            icon: LuMail,
            header: t('email'),
            text: email,
            type: 'email',
            link: true
        },
        {
            icon: LuClock,
            header: t('time'),
            text: t('timeText'),
            type: 'time'
        },
        {
            icon: LuMapPin,
            header: t('address'),
            text: t('addressText'),
            type: 'address'
        }
    ];

    return (
        <Box>
            <HeaderSection bg='/assets/room3/10-min.jpg' />
            <WrapContainer>
                <PageElemContainer>
                    <Wrap>
                        {iconsInfo.map(i => (
                            <ContactInfoBox key={i.type} {...i} />
                        ))}
                    </Wrap>
                    <YandexMaps /> 
                </PageElemContainer>
            </WrapContainer>
        </Box>
    );
};

export default ContactsPage;