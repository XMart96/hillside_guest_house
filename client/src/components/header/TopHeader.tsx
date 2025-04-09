import { JSX } from 'react';
import { LuInstagram, LuMail, LuPhone } from 'react-icons/lu';

import { data } from '@/data';
import { Box, HStack } from '@chakra-ui/react';
import { LinkItem } from '@components/LinkItems';
import { HeaderWrapperContainer } from '@components/layoutElements';
import { LanguageSelector } from '@header/LanguageSelector';

export const TopHeader = (): JSX.Element => {
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
