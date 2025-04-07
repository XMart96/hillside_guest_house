import { JSX } from 'react';
import { Flex, Wrap } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';
import { Map } from '@/components/Map';
import {
    ContactsWrapperContainer,
    PageSectionContainer,
} from '@/components/layoutElements';
import { useTranslation } from 'react-i18next';
import { ContactsItem } from '@/components/ContactsItem';
import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import { data } from '@/data';

export const ContactsPage = (): JSX.Element => {
    const ns = ['contactInfo'];
    const { t } = useTranslation(ns);
    const { phone, email } = data;

    const contactsItems = [
        {
            icon: LuPhone,
            header: t('phone'),
            label: phone,
            type: 'phone',
            link: true,
        },
        {
            icon: LuMail,
            header: t('email'),
            label: email,
            type: 'email',
            link: true,
        },
        {
            icon: LuClock,
            header: t('time'),
            label: t('timeText'),
            type: 'time',
        },
        {
            icon: LuMapPin,
            header: t('address'),
            label: t('addressText'),
            type: 'address',
        },
    ];

    return (
        <Flex direction='column'>
            <BreadcrumbSection bg='/assets/room3/10-min.jpg' />
            <ContactsWrapperContainer>
                <PageSectionContainer>
                    <Wrap>
                        {contactsItems.map(item => (
                            <ContactsItem key={item.type} {...item} />
                        ))}
                    </Wrap>
                    <Map />
                </PageSectionContainer>
            </ContactsWrapperContainer>
        </Flex>
    );
};
