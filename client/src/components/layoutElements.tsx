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
        py='3'
        justify='center'
        align='baseline'
        color='wht'
        wrap='wrap'
        gap='8'
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
        gap='3'
        my='5'
        maxW={{ base: '300px', lg: '100%' }}
    >
        {children}
    </Flex>
);

interface IFooterItemContainerProps {
    children: ReactNode;
}
export const ContactsWrapperContainer = ({
    children,
}: IFooterItemContainerProps): JSX.Element => (
    <Flex maxW='1100px' w='100%' mx='auto' px='5' py='1'>
        {children}
    </Flex>
);

interface IContactsItemContainer {
    children: ReactNode;
}
export const ContactsItemContainer = ({
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

interface IPageElemContainer {
    children: ReactNode;
    disableShadow?: boolean;
}
export const PageElemContainer = ({
    children,
    disableShadow,
}: IPageElemContainer): JSX.Element => (
    <Flex
        direction='column'
        w='100%'
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
    <Flex maxW='1100px' w='100%' mx='auto' px='5' py='1'>
        {children}
    </Flex>
);

interface IContactUsNowItemContainer {
    children: ReactNode;
}
export const ContactUsNowItemContainer = ({
    children,
}: IContactUsNowItemContainer): JSX.Element => (
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
    <Flex
        maxW='1100px'
        w='100%'
        mx='auto'
        px='5'
        py='1'
        justify='center'
        gap='3'
        wrap='wrap'
    >
        {children}
    </Flex>
);

interface INewsItemContainer {
    children: ReactNode;
}
export const NewsItemContainer = ({
    children,
}: INewsItemContainer): JSX.Element => (
    <Flex maxW='1100px' w='100%' mx='auto' px='5' py='1'>
        {children}
    </Flex>
);

interface IRoomsPageContainer {
    children: ReactNode;
}
export const RoomsPageContainer = ({
    children,
}: IRoomsPageContainer): JSX.Element => (
    <Flex
        direction={{ base: 'column', sm: 'row' }}
        maxW='1100px'
        w='100%'
        mx='auto'
        px='5'
        py='1'
        justify={{ base: 'center', md: 'space-between' }}
        align='center'
        wrap='wrap'
    >
        {children}
    </Flex>
);

interface IRoomItemContainer {
    children: ReactNode;
}
export const RoomItemContainer = ({
    children,
}: IRoomItemContainer): JSX.Element => (
    <Flex
        direction='column'
        w={{ base: '100%', sm: '80%', md: '49%' }}
        my='5'
        p='3'
        bg='wht'
        rounded='lg'
        shadow='0 10px 20px 7px rgba(0, 0, 0, 0.1)'
    >
        {children}
    </Flex>
);
