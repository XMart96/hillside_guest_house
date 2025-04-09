import { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack } from '@chakra-ui/react';
import { NavLinkItem } from '@components/LinkItems';

interface IDrawerTriggerProps {
    onClose?: () => void;
}
export const Nav = ({ onClose }: IDrawerTriggerProps): JSX.Element => {
    const ns = ['links'];
    const { t } = useTranslation(ns);

    type NavItems = {
        path: string;
        label: string;
    };
    const links: NavItems[] = t('links', { returnObjects: true }) as NavItems[];

    return (
        <Stack gap='5' direction={{ base: 'column', md: 'row' }}>
            {links.map(({ path, label }) => (
                <NavLinkItem
                    key={path}
                    path={path}
                    label={t(label)}
                    onClose={onClose}
                />
            ))}
        </Stack>
    );
};
