import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { Heading, Stack } from '@chakra-ui/react';
import { Breadcrumb } from '@components/Breadcrumb';

interface IBreadcrumbSectionProps {
    bg: string;
}
export const BreadcrumbSection = ({
    bg,
}: IBreadcrumbSectionProps): JSX.Element => {
    const ns = ['links', 'rooms', 'news'];
    const { t } = useTranslation(ns);

    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);
    const currentPath = pathNames[pathNames.length - 1];

    type linkItems = {
        path: string;
        label: string;
        header?: string;
    };
    const navLinks: linkItems[] = t('links', {
        returnObjects: true,
    }) as linkItems[];
    const rooms: linkItems[] = t('rooms:rooms', {
        returnObjects: true,
    }) as linkItems[];
    const news: linkItems[] = t('news:news', {
        returnObjects: true,
    }) as linkItems[];

    const allLinks = [...navLinks, ...rooms, ...news];
    const currentLink = allLinks.find(i => i.path === `/${currentPath}`);

    return (
        <Stack
            h='250px'
            bgSize='cover'
            bgPos='center'
            justify='center'
            align='center'
            bgImage={`url(${bg})`}
        >
            <Heading size='4xl' mb='1' color='wht'>
                {currentLink?.header || currentLink?.label}
            </Heading>
            <Breadcrumb pathNames={pathNames} links={allLinks} />
        </Stack>
    );
};
