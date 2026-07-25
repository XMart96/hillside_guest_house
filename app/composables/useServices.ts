export interface Service {
    id: number;
    slug: string;
    name: string;
    fullName: string;
    description: string;
    texts: string[];
    image_path: string;
    images: string[];
}

export const useServices = () => {
    const { t, tm, rt } = useI18n();
    let id = 0;

    const makeService = (
        params: Omit<
            Service,
            'id' | 'name' | 'fullName' | 'description' | 'image_path' | 'texts'
        >,
    ): Service => ({
        ...params,
        id: ++id,
        name: t(`services.${params.slug}.name`),
        fullName: t(`services.${params.slug}.fullName`),
        description: t(`services.${params.slug}.description`),
        image_path: `/images/services/${params.slug}`,
        texts: (tm(`services.${params.slug}.texts`) as unknown[]).map(rt),
    });

    const services = computed<Service[]>(() => [
        makeService({
            slug: 'transfer',
            images: ['1.jpg'],
        }),
        makeService({
            slug: 'tours',
            images: ['1.jpg'],
        }),
        makeService({
            slug: 'car-rental',
            images: ['1.jpg'],
        }),
    ]);
    return { services };
};
