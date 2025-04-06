import { JSX } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
    NewsItemContainer,
    PageElemContainer,
} from '@/components/layoutElements';

export const SingleNewsPage = (): JSX.Element => {
    const { t } = useTranslation(['news']);
    const { slug } = useParams();

    type currentNewsItem = {
        path: string;
        date: string;
        imgPath: string;
        bgImage: string;
        subheader: string;
        texts: string[];
    };
    const newsList: currentNewsItem[] = t('news', {
        returnObjects: true,
    }) as currentNewsItem[];
    const currentNews = newsList.find(news => news.path === `/${slug}`);
    const { date, imgPath, bgImage, subheader, texts } = currentNews ?? {};

    return (
        <Flex direction='column' color='gry'>
            <BreadcrumbSection bg={`${imgPath}${bgImage}`} />
            <NewsItemContainer>
                <PageElemContainer disableShadow={true}>
                    <Heading
                        size={{ base: '2xl', md: '3xl' }}
                        textAlign='center'
                    >
                        {subheader}
                    </Heading>
                    <Heading textAlign='center' mt='2'>
                        {date}
                    </Heading>
                    {texts?.map(text => (
                        <Text key={text} mt='5'>
                            {text}
                        </Text>
                    ))}
                </PageElemContainer>
            </NewsItemContainer>
        </Flex>
    );
};
