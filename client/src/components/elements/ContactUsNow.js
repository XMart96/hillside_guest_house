import { Flex, Heading, Stack, Text, HStack } from '@chakra-ui/react';
import PageContainer from './PageContainer';
import bg from '../../assets/other/aygestan.mp4';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data';
import SocialLinks from './SocialLinks';

const ContactUsNow = () => {
    const { t } = useTranslation(['contactInfo']);

    return (
        <PageContainer position='relative' h='250px' p='0'>
            <video autoPlay loop muted 
                style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0, 
                    height: 'inherit', 
                    width: '100%', 
                    objectFit: 'cover' 
                }}
            >
                <source src={bg} type='video/mp4' />
            </video>
            <Flex 
                bg='rgba(0, 0, 0, 0.3)' 
                direction={{base: 'column', md: 'row'}} 
                position='relative' 
                zIndex='1' 
                w='100%' 
                justify='space-around' 
                align='center'
                p='2.5'
            >
                <Stack>
                    <Heading size='3xl'>{t('contactUs')}</Heading>
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
        </PageContainer>
    );
};

export default ContactUsNow;