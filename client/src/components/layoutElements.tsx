import { JSX, ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

interface ISimpleContainerProps extends FlexProps {
    children: ReactNode;
}
const SimpleContainer = ({
    children,
    ...props
}: ISimpleContainerProps): JSX.Element => (
    <Flex maxW='1100px' w='100%' mx='auto' px='5' py='1' {...props}>
        {children}
    </Flex>
);

interface IHeaderWrapperContainerProps {
    children: ReactNode;
}
export const HeaderWrapperContainer = ({
    children,
}: IHeaderWrapperContainerProps): JSX.Element => (
    <SimpleContainer justify='space-between' align='center'>
        {children}
    </SimpleContainer>
);

interface IFooterWrapperContainerProps {
    children: ReactNode;
}
export const FooterWrapperContainer = ({
    children,
}: IFooterWrapperContainerProps): JSX.Element => (
    <SimpleContainer
        wrap='wrap'
        justify='center'
        align='baseline'
        color='wht'
        gap='8'
    >
        {children}
    </SimpleContainer>
);

interface IFooterItemContainerProps {
    children: ReactNode;
    flex?: string;
}
export const FooterSectionContainer = ({
    children,
    flex,
}: IFooterItemContainerProps): JSX.Element => (
    <Flex
        direction='column'
        flex={flex}
        gap='3'
        my='5'
        maxW={{ base: '300px', lg: '100%' }}
    >
        {children}
    </Flex>
);

interface IContactsWrapperContainerProps {
    children: ReactNode;
}
export const ContactsWrapperContainer = ({
    children,
}: IContactsWrapperContainerProps): JSX.Element => (
    <SimpleContainer>{children}</SimpleContainer>
);

interface IContactsItemContainer {
    children: ReactNode;
}
export const ContactsSectionContainer = ({
    children,
}: IContactsItemContainer): JSX.Element => (
    <Flex
        direction='column'
        align='center'
        flex='1'
        color='gry'
        my='3'
        minW='150px'
        gap='3'
    >
        {children}
    </Flex>
);

interface IPageSectionContainer {
    children: ReactNode;
    disableShadow?: boolean;
    w?: FlexProps['w'];
}
export const PageSectionContainer = ({
    children,
    disableShadow,
    w = '100%',
}: IPageSectionContainer): JSX.Element => (
    <Flex
        direction='column'
        w={w}
        my='5'
        p='3'
        bg='wht'
        rounded='lg'
        shadow={disableShadow ? 'none' : '0 10px 20px 7px rgba(0, 0, 0, 0.1)'}
    >
        {children}
    </Flex>
);

interface IContactUsNowContainer {
    children: ReactNode;
}
export const ContactUsNowContainer = ({
    children,
}: IContactUsNowContainer): JSX.Element => (
    <SimpleContainer>{children}</SimpleContainer>
);

interface IContactUsNowSectionContainer {
    children: ReactNode;
}
export const ContactUsNowSectionContainer = ({
    children,
}: IContactUsNowSectionContainer): JSX.Element => (
    <Flex
        bg='rgba(0, 0, 0, 0.3)'
        direction={{ base: 'column', md: 'row' }}
        position='relative'
        zIndex='1'
        w='100%'
        h='100%'
        justify='space-around'
        align='center'
        p='5'
    >
        {children}
    </Flex>
);

interface INewsPageContainer {
    children: ReactNode;
}
export const NewsPageContainer = ({
    children,
}: INewsPageContainer): JSX.Element => (
    <SimpleContainer justify='center' gap='3' wrap='wrap'>
        {children}
    </SimpleContainer>
);

interface ISingleNewsItemContainer {
    children: ReactNode;
}
export const SingleNewsItemContainer = ({
    children,
}: ISingleNewsItemContainer): JSX.Element => (
    <SimpleContainer>{children}</SimpleContainer>
);

interface IRoomsPageContainer {
    children: ReactNode;
}
export const RoomsPageContainer = ({
    children,
}: IRoomsPageContainer): JSX.Element => (
    <SimpleContainer
        direction={{ base: 'column', sm: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align='center'
        wrap='wrap'
    >
        {children}
    </SimpleContainer>
);

interface ISingleRoomItemContainer {
    children: ReactNode;
}
export const SingleRoomItemContainer = ({
    children,
}: ISingleRoomItemContainer): JSX.Element => (
    <SimpleContainer>{children}</SimpleContainer>
);

interface IBookPageContainer {
    children: ReactNode;
}
export const BookPageContainer = ({
    children,
}: IBookPageContainer): JSX.Element => (
    <SimpleContainer>{children}</SimpleContainer>
);

interface IHomePageFormContainer {
    children: ReactNode;
}
export const HomePageFormContainer = ({
    children,
}: IHomePageFormContainer): JSX.Element => (
    <Flex
        bg='wht'
        position='absolute'
        color='gry'
        w={{ base: 'inherit', md: '95%' }}
        bottom='10'
        left='calc(50% - 12px)'
        transform='translateX(-50%)'
        maxW='fit-content'
        p='5'
        m='3'
        shadow='0 10px 20px 7px rgba(0, 0, 0, 0.1)'
        rounded='lg'
    >
        {children}
    </Flex>
);
