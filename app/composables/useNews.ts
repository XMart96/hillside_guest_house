export interface News {
    id: number;
    slug: string;
    name: string;
    description: string;
    date: string;
    author: string;
    image_path: string;
    images: string[];
    texts: string[];
}

export const useNews = () => {
    const { t, tm, rt } = useI18n();
    let id = 0;

    const makeNews = (
        params: Omit<
            News,
            'id' | 'name' | 'description' | 'author' | 'texts' | 'image_path'
        >,
    ): News => ({
        ...params,
        id: ++id,
        name: t(`news.${params.slug}.name`),
        description: t(`news.${params.slug}.description`),
        author: t(`news.${params.slug}.author`),
        texts: (tm(`news.${params.slug}.texts`) as unknown[]).map(rt),
        image_path: `/images/news/${params.slug}`,
    });

    const news = computed<News[]>(() => [
        makeNews({
            slug: 'coop',
            date: '2025.02.21',
            images: ['coop.jpg'],
        }),
        makeNews({
            slug: 'mir',
            date: '2025.09.21',
            images: ['mir.png'],
        }),
        makeNews({
            slug: 'discount',
            date: '2025.11.01',
            images: ['discount.jpg'],
        }),
    ]);
    return { news };
};
