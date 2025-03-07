import { Heading, Stack } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import BreadCrumb from "@components/BreadCrumb";

const HeaderSection = ({ bg }) => {
    const { t } = useTranslation(['header']);
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    
    return (
        <Stack 
        h='250px'
        bgSize='cover'
        backgroundPosition='center'
        bgImage={`url(${bg})`}
        justify='center'
        align='center'
        >
            <Heading size='4xl' mb='1'>{t(pathNames)}</Heading>
            <BreadCrumb path={pathNames} />
        </Stack>
    );
};

export default HeaderSection