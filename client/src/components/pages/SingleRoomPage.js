import { Box } from "@chakra-ui/react";
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

const SingleRoomPage = () => {
    const { t } = useTranslation(['rooms']);
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    const roomPath = pathNames[pathNames.length - 1];
    const currentRoom = t('rooms', { returnObjects: true }).find(r => r.path === `/${roomPath}`);
    const {imgPath, bgImage, images} = currentRoom;


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
                </PageElemContainer>
            </WrapContainer>
        </Box>
    );
};

export default SingleRoomPage;