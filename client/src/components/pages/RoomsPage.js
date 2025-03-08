import { Box } from "@chakra-ui/react";
import HeaderSection from "@components/HeaderSection";
import { WrapContainer } from '@components/layoutElements';
import { useTranslation } from "react-i18next";
import RoomItem from "@components/RoomItem";

const RoomsPage = () => {
    const { t } = useTranslation(['rooms']);

    return (
        <Box>
            <HeaderSection bg='/assets/room4/9-min.jpg' />
            <WrapContainer gap='2' wrap='wrap' justify='center'>
                { t('rooms', { returnObjects: true }).map(i => {
                    return <RoomItem key={i.id} {...i} btn={t('btn')} />
                })}
            </WrapContainer>
        </Box>
    );
};

export default RoomsPage;