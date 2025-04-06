import { JSX, useRef, useState, useEffect, useCallback } from 'react';
import { Flex, Heading, Text, List, Box } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
    NewsItemContainer,
    PageElemContainer,
} from '@/components/layoutElements';
import LightGallery from 'lightgallery/react';
import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import { LuCheck } from 'react-icons/lu';

export const SingleRoomPage = (): JSX.Element => {
    const ns = ['rooms'];
    const { t } = useTranslation(ns);
    const { slug } = useParams();

    type currentRoomItem = {
        path: string;
        imgPath: string;
        bgImage: string;
        images: string[];
        details: {
            kitchen: boolean;
            kitchenFacilities: string[];
            bathroomFacilities: string[];
            view: string[];
            facilities: string[];
        };
    };
    const roomsList: currentRoomItem[] = t('rooms', {
        returnObjects: true,
    }) as currentRoomItem[];
    const currentRoom = roomsList.find(room => room.path === `/${slug}`);
    const { imgPath, bgImage, images, details } = currentRoom ?? {};

    const lightGalleryRef = useRef<ILightGallery>(null);
    const containerRef = useRef(null);
    const [galleryContainer, setGalleryContainer] = useState(null);

    const onInit = useCallback((detail: { instance: ILightGallery }) => {
        if (detail) {
            lightGalleryRef.current = detail.instance;
            lightGalleryRef.current.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer(containerRef.current);
        }
    }, []);

    return (
        <Flex direction='column'>
            <BreadcrumbSection bg={`${imgPath}${bgImage}`} />
            <NewsItemContainer>
                <PageElemContainer>
                    <Box
                        h={{ base: '400px', md: '600px', lg: '700px' }}
                        ref={containerRef}
                    ></Box>
                    <LightGallery
                        onInit={onInit}
                        container={galleryContainer}
                        plugins={[lgThumbnail]}
                        showMaximizeIcon={true}
                        download={false}
                        closable={false}
                        dynamic={true}
                        dynamicEl={images?.map(i => ({
                            src: `${imgPath}${i}`,
                            thumb: `${imgPath}/thumb/${i}`,
                        }))}
                    ></LightGallery>
                    <Heading
                        my='10'
                        color='gry'
                        size={{ base: '2xl', md: '3xl' }}
                        textAlign='center'
                    >
                        Room Details
                    </Heading>
                    {details?.kitchen && (
                        <>
                            <Text color='gry'>Kitchen Facilities</Text>
                            <List.Root gap='2' variant='plain'>
                                {details?.kitchenFacilities.map((i, k) => (
                                    <List.Item key={k} color='gry'>
                                        <List.Indicator asChild color='grn'>
                                            <LuCheck />
                                        </List.Indicator>
                                        {i}
                                    </List.Item>
                                ))}
                            </List.Root>
                        </>
                    )}
                    <Text color='gry'>Bathroom Facilities</Text>
                    <List.Root gap='2' variant='plain'>
                        {details?.bathroomFacilities.map((i, k) => (
                            <List.Item key={k} color='gry'>
                                <List.Indicator asChild color='grn'>
                                    <LuCheck />
                                </List.Indicator>
                                {i}
                            </List.Item>
                        ))}
                    </List.Root>
                    <Text color='gry'>View</Text>
                    <List.Root gap='2' variant='plain'>
                        {details?.view.map((i, k) => (
                            <List.Item key={k} color='gry'>
                                <List.Indicator asChild color='grn'>
                                    <LuCheck />
                                </List.Indicator>
                                {i}
                            </List.Item>
                        ))}
                    </List.Root>
                    <Text color='gry'>Facilities</Text>
                    <List.Root gap='2' variant='plain'>
                        {details?.facilities.map((i, k) => (
                            <List.Item key={k} color='gry'>
                                <List.Indicator asChild color='grn'>
                                    <LuCheck />
                                </List.Indicator>
                                {i}
                            </List.Item>
                        ))}
                    </List.Root>
                </PageElemContainer>
            </NewsItemContainer>
        </Flex>
    );
};
