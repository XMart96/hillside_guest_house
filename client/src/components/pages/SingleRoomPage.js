import { Box, List, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

import HeaderSection from "@components/HeaderSection";
import { WrapContainer, PageElemContainer } from "@components/layoutElements";

import { useRef, useState, useCallback, useEffect } from "react";
import '@/App.css';

import { LuCheck } from 'react-icons/lu';

const SingleRoomPage = () => {
    const { t } = useTranslation(['rooms']);
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    const roomPath = pathNames[pathNames.length - 1];
    const currentRoom = t('rooms', { returnObjects: true }).find(r => r.path === `/${roomPath}`);
    const {imgPath, bgImage, images, details} = currentRoom;


    const lightGalleryRef = useRef(null);
    const containerRef = useRef(null);
    const [galleryContainer, setGalleryContainer] = useState(null);

    const onInit = useCallback((detail) => {
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

    return(
        <Box>
            <HeaderSection bg={`${imgPath}${bgImage}`} />
            <WrapContainer>
                <PageElemContainer>
                    <Box h={{base: '400px', md: '600px', lg: '700px'}} ref={containerRef}></Box>
                    <LightGallery
                        onInit={onInit}
                        container={galleryContainer} 
                        plugins={[lgThumbnail]}
                        showMaximizeIcon={true}
                        download={false}
                        closable={false}
                        dynamic={true}
                        dynamicEl={
                            images.map(i => ({
                                src: `${imgPath}${i}`,
                                thumb: `${imgPath}/thumb/${i}`
                            }))
                        }
                    >
                    </LightGallery>
                    <Heading my='10' color='gry' size={{base: '2xl', md: '3xl'}} textAlign="center">Room Details</Heading>
                    { details.kitchen && (
                        <>
                            <Text color='gry'>Kitchen Facilities</Text>
                            <List.Root gap="2" variant='plain'>
                                {
                                    details.kitchenFacilities.map((i, k) => (
                                        <List.Item key={k} color='gry'>
                                            <List.Indicator asChild color='grn'>
                                                <LuCheck />
                                            </List.Indicator>
                                            {i}
                                        </List.Item>
                                    ))
                                }

                            </List.Root>
                        </>
                    )}
                    <Text color='gry'>Bathroom Facilities</Text>
                    <List.Root gap="2" variant='plain'>
                        {
                            details.bathroomFacilities.map((i, k) => (
                                <List.Item key={k} color='gry'>
                                    <List.Indicator asChild color='grn'>
                                        <LuCheck />
                                    </List.Indicator>
                                    {i}
                                </List.Item>
                            ))
                        }
                    </List.Root>
                    <Text color='gry'>View</Text>
                    <List.Root gap="2" variant='plain'>
                        {
                            details.view.map((i, k) => (
                                <List.Item key={k} color='gry'>
                                    <List.Indicator asChild color='grn'>
                                        <LuCheck />
                                    </List.Indicator>
                                    {i}
                                </List.Item>
                            ))
                        }
                    </List.Root>
                    <Text color='gry'>Facilities</Text>
                    <List.Root gap="2" variant='plain'>
                        {
                            details.facilities.map((i, k) => (
                                <List.Item key={k} color='gry'>
                                    <List.Indicator asChild color='grn'>
                                        <LuCheck />
                                    </List.Indicator>
                                    {i}
                                </List.Item>
                            ))
                        }
                    </List.Root>
                </PageElemContainer>
            </WrapContainer>
        </Box>
    );
};

export default SingleRoomPage;