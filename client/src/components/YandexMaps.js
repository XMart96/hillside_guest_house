/*
*   FileName: YandexMaps.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The YandexMaps component renders an interactive map using Yandex Maps API. 
*   It displays a map with a specified center, zoom level, and a placemark for a given location.
*/

import { Box } from '@chakra-ui/react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMaps = () => {
    const mapsKey = process.env.REACT_APP_MAPS_KEY;

    return(
        <YMaps query={{ apikey: mapsKey }}>
            <Box w="100%" h={{ base: '300px', md: '460px' }}>
                <Map
                    style={{ width: '100%', height: '100%' }}
                    defaultState={{
                        center: [40.18, 44.52],
                        zoom: 14,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                    <Placemark defaultGeometry={[40.180214, 44.531762]} />
                </Map>
            </Box>
        </YMaps>
    );
};

export default YandexMaps;
