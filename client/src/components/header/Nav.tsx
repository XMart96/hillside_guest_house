import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NavLinkItem } from '@components/NavLinkItem';
import { DrawerTriggerProps, NavItems } from '@/types';

export const Nav = ({ onClose }: DrawerTriggerProps) => {
    const ns = ['links'];
    const { t } = useTranslation(ns);
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
