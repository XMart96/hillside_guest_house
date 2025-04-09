import { useTranslation } from 'react-i18next';

import { data } from '@/data';
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { SocialLinkItem } from '@components/LinkItems';
import {
    ContactUsNowContainer,
    ContactUsNowSectionContainer,
} from '@components/layoutElements';

export const ContactUsNow = () => {
    const ns = ['contactUsNow'];
    const { t } = useTranslation(ns);
    const { telegram, whatsApp } = data;

    return (
        <ContactUsNowContainer>
            <Box position='relative' h='250px' w='100%' my='5'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: 'inherit',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src='/assets/other/aygestan.mp4' type='video/mp4' />
                </video>
                <ContactUsNowSectionContainer>
                    <Stack color='wht'>
                        <Heading size={{ base: '2xl', md: '3xl' }}>
                            {t('contactUs')}
                        </Heading>
                        <Text>{t('contactUsText')}</Text>
                    </Stack>
                    <HStack gap='3'>
                        <SocialLinkItem name='Telegram' url={telegram} />
                        <SocialLinkItem name='WhatsApp' url={whatsApp} />
                    </HStack>
                </ContactUsNowSectionContainer>
            </Box>
        </ContactUsNowContainer>
    );
};
