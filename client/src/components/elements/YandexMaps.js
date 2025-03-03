import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { mapsKey } from '../../data';

const YandexMaps = () => (
    <YMaps query={{apikey: mapsKey}}>
        <Map 
            style={{width: '100%', height: '460px'}}
            defaultState={{
                center: [40.18, 44.52],
                zoom: 14,
                controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
            <Placemark defaultGeometry={[40.180214, 44.531762]} />
        </Map>
    </YMaps>
);

export default YandexMaps;