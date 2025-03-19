import { Box, Heading, Text } from "@chakra-ui/react";
import HeaderSection from '@components/HeaderSection';
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { 
    WrapContainer, 
    PageElemContainer
} from "@components/layoutElements";

const SingleNewsPage = () => {
    const { t } = useTranslation(['news']);
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    const newsPath = pathNames[pathNames.length - 1];
    const currentNews = t('news', { returnObjects: true }).find(r => r.path === `/${newsPath}`);
    const {date, imgPath, bgImage, subheader, texts} = currentNews;

    return(
        <Box>
            <HeaderSection bg={`${imgPath}${bgImage}`} />
            <WrapContainer>
                <PageElemContainer color='gry'>
                    <Heading size={{base: '2xl', md: '3xl'}} textAlign="center">{subheader}</Heading>
                    <Heading textAlign="center" mt='2'>{date}</Heading>
                    {
                        texts.map((i, k) => (
                            <Text key={k} mt='5'>{i}</Text>
                        ))
                    }
                </PageElemContainer>
            </WrapContainer>
        </Box>
    ); 
};

export default SingleNewsPage;