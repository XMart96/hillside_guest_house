import { JSX } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';
import {
    NewsPageContainer,
    PageSectionContainer,
} from '@/components/layoutElements';
import { useTranslation } from 'react-i18next';
import { NewsItem } from '@/components/NewsItem';
import { SubscribeBox } from '@/components/SubscribeBox';

export const NewsPage = (): JSX.Element => {
    const ns = ['news'];
    const { t } = useTranslation(ns);

    type NewsItems = {
        id: number;
        date: string;
        path: string;
        imgPath: string;
        bgImage: string;
        header: string;
        subheader: string;
        btn: string;
    };
    const news: NewsItems[] = t('news', { returnObjects: true }) as NewsItems[];

    return (
        <Flex direction='column'>
            <BreadcrumbSection bg='/assets/room3/10-min.jpg' />
            <NewsPageContainer>
                <Box flex='1'>
                    {news.reverse().map(item => (
                        <NewsItem key={item.id} {...item} btn={t('news:btn')} />
                    ))}
                </Box>
                <Box>
                    <PageSectionContainer>
                        <SubscribeBox color='gry' />
                    </PageSectionContainer>
                </Box>
            </NewsPageContainer>
        </Flex>
    );
};
