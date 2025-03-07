import { Box } from "@chakra-ui/react";
import HeaderSection from "@/components/HeaderSection";
import NewsItem from "@/components/NewsItem";
import { useTranslation } from "react-i18next";
import SubscribeBox from "@/components/SubscribeBox";
import { WrapContainer, PageElemContainer } from '@/components/layoutElements';

const NewsPage = () => {
    const { t } = useTranslation(['news']);

    return (
        <Box>
            <HeaderSection bg='/assets/room3/10-min.jpg' header='News' />
            <WrapContainer gap='2' wrap='wrap'>
                <Box flex='1'>
                    { t('news', { returnObjects: true }).slice().reverse().map(i => {
                        return <NewsItem key={i.id} {...i} btn={t('btn')} />
                    })}
                </Box>
                <Box>
                    <PageElemContainer maxW='300px'>
                        <SubscribeBox/>
                    </PageElemContainer>
                </Box>
            </WrapContainer>
        </Box>
    );
};

export default NewsPage;