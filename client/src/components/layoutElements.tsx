import { JSX, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

interface IHeaderWrapperContainerProps {
    children: ReactNode;
}
export const HeaderWrapperContainer = ({
    children,
}: IHeaderWrapperContainerProps): JSX.Element => (
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

interface IFooterWrapperContainerProps {
    children: ReactNode;
}
export const FooterWrapperContainer = ({
    children,
}: IFooterWrapperContainerProps): JSX.Element => (
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

interface IFooterItemContainerProps {
    children: ReactNode;
    flex?: string;
}
export const FooterItemContainer = ({
    children,
    flex,
}: IFooterItemContainerProps): JSX.Element => (
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
