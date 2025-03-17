import { Box } from "@chakra-ui/react";
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
    const currentNews = t('news', { returnObjects: true }).find(r => r.url === newsPath);
    const {imgPath} = currentNews;

    return(
        <Box>
            <HeaderSection bg={imgPath} />
            <WrapContainer>
                <PageElemContainer>
                    
                </PageElemContainer>
            </WrapContainer>
        </Box>
    ); 
};

export default SingleNewsPage;