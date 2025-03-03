import { Stack } from "@chakra-ui/react";
import image from '../../assets/room3/10-min.jpg';
import HeaderSection from "../elements/HeaderSection";
import YandexMaps from "../elements/YandexMaps";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import ContactInfoBox from "../elements/ContactInfoBox";
import { phone, email } from "../../data";
import { useTranslation } from "react-i18next";
import PageContainer from "../elements/PageContainer";
import ContactUsNow from "../elements/ContactUsNow";

const ContactsPage = () => {
    const { t } = useTranslation(['contactInfo']);
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
        <Stack gap='0'>
            <HeaderSection bg={image} />
            <Stack align='center'>
                <PageContainer flexWrap='wrap'>
                    {iconsInfo.map((i, k) => (
                        <ContactInfoBox key={k} {...i} />
                    ))}
                    <YandexMaps /> 
                </PageContainer>
                <ContactUsNow />
            </Stack>
        </Stack>
    );
};

export default ContactsPage;