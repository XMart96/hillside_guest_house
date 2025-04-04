import { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/react';
import { FooterItemContainerProps } from '@/types';

export const HeaderWrapperContainer = ({ children }: PropsWithChildren) => (
    <Flex
        maxW='1100px'
        w='100%'
        mx='auto'
        px='5'
        py='1'
        justify='space-between'
        align='center'
    >
        {children}
    </Flex>
);

export const FooterWrapperContainer = ({ children }: PropsWithChildren) => (
    <Flex
        maxW='1100px'
        w='100%'
        mx='auto'
        px='5'
        py='1'
        pb='5'
        justify='center'
        align='baseline'
        color='wht'
        wrap='wrap'
    >
        {children}
    </Flex>
);

export const FooterItemContainer = ({
    children,
    flex,
}: FooterItemContainerProps) => (
    <Flex
        direction='column'
        flex={flex}
        gap='2'
        p='5'
        m='3'
        maxW={{ base: '300px', lg: '100%' }}
    >
        {children}
    </Flex>
);
