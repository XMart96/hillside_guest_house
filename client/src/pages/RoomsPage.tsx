import { JSX } from 'react';
import { Flex } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';
import { RoomsPageContainer } from '@/components/layoutElements';
import { useTranslation } from 'react-i18next';
import { RoomItem } from '@/components/RoomItem';

export const RoomsPage = (): JSX.Element => {
    const ns = ['rooms'];
    const { t } = useTranslation(ns);

    type RoomsItems = {
        id: number;
        path: string;
        imgPath: string;
        bgImage: string;
        price: string;
        header: string;
        subheader: string;
        btn: string;
    };
    const rooms: RoomsItems[] = t('rooms', {
        returnObjects: true,
    }) as RoomsItems[];

    return (
        <Flex direction='column'>
            <BreadcrumbSection bg='/assets/room4/9-min.jpg' />
            <RoomsPageContainer>
                {rooms.map(item => (
                    <RoomItem key={item.id} {...item} btn={t('rooms:btn')} />
                ))}
            </RoomsPageContainer>
        </Flex>
    );
};
