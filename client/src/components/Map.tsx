import { JSX } from 'react';

import { Box } from '@chakra-ui/react';
import { Placemark, Map as YMap, YMaps } from '@iminside/react-yandex-maps';

export const Map = (): JSX.Element => (
    <YMaps query={{ apikey: import.meta.env.VITE_MAPS_KEY }}>
        <Box w='100%' h={{ base: '300px', md: '500px' }} overflow='hidden'>
            <YMap
                style={{ width: '100%', height: '100%' }}
                defaultState={{
                    center: [40.18, 44.52],
                    zoom: 14,
                    controls: ['zoomControl', 'fullscreenControl'],
                }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                <Placemark defaultGeometry={[40.180214, 44.531762]} />
            </YMap>
        </Box>
    </YMaps>
);
