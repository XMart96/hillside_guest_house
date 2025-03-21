import { Flex, Heading, Stack, Text, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SocialLinks from '@components/SocialLinks';
import { WrapContainer, PageElemContainer } from "@components/layoutElements";

const ContactUsNow = () => {
    const { t } = useTranslation(['contactUsNow']);
    const phone = process.env.REACT_APP_PHONE;

    const socialLinks = [
        {
            name: 'WhatsApp',
            url: `https://wa.me/${phone.slice(1)}`
        },
        {
            name: 'Telegram',
            url: 'https://t.me/hillside_guest_house'
        }
    ];

    return (
        <WrapContainer>
            <PageElemContainer position='relative' h='250px'>
                <video autoPlay loop muted playsInline
                    style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0, 
                        height: 'inherit', 
                        width: '100%', 
                        objectFit: 'cover' 
                    }}
                >
                    <source src='/assets/other/aygestan.mp4' type='video/mp4' />
                </video>
                <Flex 
                    bg='rgba(0, 0, 0, 0.3)' 
                    direction={{base: 'column', md: 'row'}} 
                    position='relative' 
                    zIndex='1' 
                    w='100%' 
                    h='100%'
                    justify='space-around' 
                    align='center'
                    p='5'
                    gap='2'
                >
                    <Stack color='wht'>
                        <Heading size={{base: '2xl', md: '3xl'}}>{t('contactUs')}</Heading>
                        <Text>{t('contactUsText')}</Text>
                    </Stack>
                    <HStack>
                        {
                            socialLinks.map((i, k) => (
                                <SocialLinks key={k} {...i} />
                            ))
                        }
                    </HStack>
                </Flex>
            </PageElemContainer>
        </WrapContainer>
    );
};

export default ContactUsNow;