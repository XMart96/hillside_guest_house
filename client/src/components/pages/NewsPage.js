import { Box } from "@chakra-ui/react";
import HeaderSection from "@components/HeaderSection";
import NewsItem from "@components/NewsItem";
import { useTranslation } from "react-i18next";
import SubscribeBox from "@components/SubscribeBox";
import { WrapContainer, PageElemContainer } from '@components/layoutElements';

const NewsPage = () => {
    const { t } = useTranslation(['news']);

    return (
        <Box>
            <HeaderSection bg='/assets/room3/10-min.jpg' />
            <WrapContainer gap='2' wrap='wrap' justify='center'>
                <Box flex='1'>
                    { t('news', { returnObjects: true }).slice().reverse().map(i => {
                        return <NewsItem key={i.id} {...i} btn={t('btn')} />
                    })}
                </Box>
                <Box>
                    <PageElemContainer maxW='300px' gap='2'>
                        <SubscribeBox textColor='gry' />
                    </PageElemContainer>
                </Box>
            </WrapContainer>
        </Box>
    );
};

export default NewsPage;