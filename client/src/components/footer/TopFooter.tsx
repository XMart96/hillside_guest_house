import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { LuLink, LuMail, LuPhone } from 'react-icons/lu';

import { data } from '@/data';
import { Box, Heading, Text } from '@chakra-ui/react';
import { LinkItem } from '@components/LinkItems';
import { LogoText } from '@components/LogoText';
import { SubscribeBox } from '@components/SubscribeBox';
import {
    FooterSectionContainer,
    FooterWrapperContainer,
} from '@components/layoutElements';

export const TopFooter = (): JSX.Element => {
    const { phone, email } = data;
    const ns = ['links', 'contactInfo', 'footer', 'news', 'rooms'];
    const { t } = useTranslation(ns);

    type RoomItems = {
        path: string;
        header: string;
    };
    const rooms: RoomItems[] = t('rooms:rooms', {
        returnObjects: true,
    }) as RoomItems[];

    type NewsItems = {
        path: string;
        label: string;
    };
    const news: NewsItems[] = t('news:news', {
        returnObjects: true,
    }) as NewsItems[];

    return (
        <Box>
            <FooterWrapperContainer>
                <FooterSectionContainer flex='2'>
                    <LogoText />
                    <LinkItem
                        url={`tel:${phone}`}
                        text={phone}
                        icon={LuPhone}
                        disableHideText
                    />
                    <LinkItem
                        url={`mailto:${email}`}
                        icon={LuMail}
                        text={email}
                        disableHideText
                    />
                    <Text>{t('contactInfo:addressText')}</Text>
                </FooterSectionContainer>
                <FooterSectionContainer flex='1'>
                    <Heading size='xl'>{t('footer:news')}</Heading>
                    {news.reverse().map(({ path, label }) => (
                        <LinkItem
                            key={path}
                            url={`news${path}`}
                            icon={LuLink}
                            text={label}
                            disableHideText
                        />
                    ))}
                </FooterSectionContainer>
                <FooterSectionContainer flex='2'>
                    <Heading size='xl'>{t('footer:links')}</Heading>
                    {rooms.map(({ path, header }) => (
                        <LinkItem
                            key={path}
                            url={`rooms${path}`}
                            icon={LuLink}
                            text={header}
                            disableHideText
                        />
                    ))}
                </FooterSectionContainer>
                <FooterSectionContainer flex='2'>
                    <SubscribeBox color='wth' />
                </FooterSectionContainer>
            </FooterWrapperContainer>
        </Box>
    );
};
