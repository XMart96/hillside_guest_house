import { Box, HStack } from '@chakra-ui/react';
import { HeaderWrapperContainer } from '@components/layoutElements';
import { LinkItem } from '@components/LinkItem';
import { data } from '@/data';
import { LuInstagram, LuMail, LuPhone } from 'react-icons/lu';
import { LanguageSelector } from '@header/LanguageSelector';

export const TopHeader = () => {
    const { phone, email, instagramUrl } = data;

    return (
        <Box bg='blu'>
            <HeaderWrapperContainer>
                <HStack gap='8'>
                    <LinkItem
                        url={`tel:${phone}`}
                        text={phone}
                        icon={LuPhone}
                    />
                    <LinkItem
                        url={`mailto:${email}`}
                        icon={LuMail}
                        text={email}
                    />
                </HStack>
                <HStack gap='3.5'>
                    <LinkItem
                        url={instagramUrl}
                        icon={LuInstagram}
                        text='Instagram'
                    />
                    <LanguageSelector />
                </HStack>
            </HeaderWrapperContainer>
        </Box>
    );
};
