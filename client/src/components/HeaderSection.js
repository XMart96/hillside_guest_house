import { Heading, Stack } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import BreadCrumb from "@components/BreadCrumb";
import logger from "@/logger";

const HeaderSection = ({ bg }) => {
    const ns = ['links', 'rooms', 'news'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));
    
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    const currentPath = pathNames[pathNames.length - 1];

    const allLinks = [
        ...t("links", { returnObjects: true }), 
        ...t("rooms:rooms", { returnObjects: true }), 
        ...t("news:news", { returnObjects: true })
    ];
    const currentLink = allLinks.find(i => i.path === `/${currentPath}`);

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
                {currentLink?.header || currentLink?.label}
            </Heading>
            <BreadCrumb path={pathNames} links={allLinks} />
        </Stack>
    );
};

export default HeaderSection;