import { Box, Text, Heading } from '@chakra-ui/react';
import {
    FooterItemContainer,
    FooterWrapperContainer,
} from '@components/layoutElements';
import { LogoText } from '@components/LogoText';
import { LinkItem } from '@components/LinkItem';
import { data } from '@/data';
import { LuPhone, LuMail, LuLink } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { RoomItems, NewsItems } from '@/types';
import { SubscribeBox } from '@components/SubscribeBox';

export const TopFooter = () => {
    const { phone, email } = data;
    const ns = ['links', 'contactInfo', 'footer', 'news', 'rooms'];
    const { t } = useTranslation(ns);
    const rooms: RoomItems[] = t('rooms:rooms', {
        returnObjects: true,
    }) as RoomItems[];
    const news: NewsItems[] = t('news:news', {
        returnObjects: true,
    }) as NewsItems[];

    return (
        <Box>
            <FooterWrapperContainer>
                <FooterItemContainer flex='2'>
                    <LogoText />
                    <LinkItem
                        url={`tel:${phone}`}
                        text={phone}
                        icon={LuPhone}
                        disableHideIcon
                    />
                    <LinkItem
                        url={`mailto:${email}`}
                        icon={LuMail}
                        text={email}
                        disableHideIcon
                    />
                    <Text>{t('contactInfo:addressText')}</Text>
                </FooterItemContainer>
                <FooterItemContainer flex='1'>
                    <Heading size='xl'>{t('footer:news')}</Heading>
                    {news.map(({ path, label }) => (
                        <LinkItem
                            key={path}
                            url={`news${path}`}
                            icon={LuLink}
                            text={label}
                            disableHideIcon
                        />
                    ))}
                </FooterItemContainer>
                <FooterItemContainer flex='2'>
                    <Heading size='xl'>{t('footer:links')}</Heading>
                    {rooms.map(({ path, header }) => (
                        <LinkItem
                            key={path}
                            url={`rooms${path}`}
                            icon={LuLink}
                            text={header}
                            disableHideIcon
                        />
                    ))}
                </FooterItemContainer>
                <FooterItemContainer flex='2'>
                    <SubscribeBox />
                </FooterItemContainer>
            </FooterWrapperContainer>
        </Box>
    );
};
