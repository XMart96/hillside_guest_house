import type { NavigationMenuItem, BreadcrumbItem } from '@nuxt/ui';

export const useNavigation = () => {
    const { t } = useI18n();
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const route = useRoute();

    const links = computed<NavigationMenuItem[]>(() => [
        { label: t('navigation.about'), to: localePath('/about') },
        { label: t('navigation.rooms'), to: localePath('/rooms') },
        { label: t('navigation.services'), to: localePath('/services') },
        { label: t('navigation.news'), to: localePath('/news') },
        { label: t('navigation.contacts'), to: localePath('/contacts') },
        { label: t('navigation.book'), to: localePath('/book') },
    ]);

    const pageName = computed(() => String(route.name).split('___')[0]);

    const breadcrumbs = computed<BreadcrumbItem[]>(() => {
        const segments = route.path
            .split('/')
            .filter((s) => s && s !== locale.value);

        const items: BreadcrumbItem[] = [
            { label: t('navigation.home'), to: localePath('/') },
        ];

        let accumulated = '';
        segments.forEach((segment, index) => {
            accumulated += `/${segment}`;

            const translationKey =
                index > 0
                    ? `${segments[index - 1]}.${segment}.name`
                    : `navigation.${segment}`;

            items.push({
                label: t(translationKey),
                to: accumulated,
            });
        });

        return items;
    });

    return { links, pageName, breadcrumbs };
};
