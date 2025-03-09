import { Heading, Stack } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import BreadCrumb from "@components/BreadCrumb";

const HeaderSection = ({ bg }) => {
    const { t } = useTranslation(['links']);
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);

    const allLinks = [
        ...t("links", { returnObjects: true }), 
        ...t("rooms", { returnObjects: true }), 
        ...t("news", { returnObjects: true })
    ];

    return (
        <Stack 
        h='250px'
        bgSize='cover'
        backgroundPosition='center'
        bgImage={`url(${bg})`}
        justify='center'
        align='center'
        >
            <Heading size='4xl' mb='1' color='wht'>
                {allLinks.find(i => i.path === location.pathname)?.label}
            </Heading>
            <BreadCrumb path={pathNames} links={allLinks} />
        </Stack>
    );
};

export default HeaderSection;