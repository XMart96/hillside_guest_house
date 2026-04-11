import type { NavigationMenuItem } from '@nuxt/ui';

export const useNavigation = () => {
    const { t } = useI18n();
    const localePath = useLocalePath();

    const items = computed<NavigationMenuItem[]>(() => [
        { label: t('navigation.home'), to: localePath('/') },
        { label: t('navigation.about'), to: localePath('/about') },
        { label: t('navigation.rooms'), to: localePath('/rooms') },
        { label: t('navigation.services'), to: localePath('/services') },
        { label: t('navigation.news'), to: localePath('/news') },
        { label: t('navigation.contacts'), to: localePath('/contacts') },
        { label: t('navigation.book'), to: localePath('/book') },
    ]);

    return { items };
};
