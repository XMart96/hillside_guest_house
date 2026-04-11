export interface News {
    id: number;
    slug: string;
    name: string;
    description: string;
    price: number;
    size: number;
    images: string[];
    amenities: string[];
}

export const useNews = () => {
    const { t } = useI18n();
    const news = computed<News[]>(() => [
        {
            id: 1,
            slug: 'deluxe',
            name: t('rooms.deluxe.name'),
            description: t('rooms.deluxe.description'),
            price: 80,
            size: 35,
            images: [
                '/rooms/deluxe/main.jpg',
                '/rooms/deluxe/bathroom.jpg',
                '/rooms/deluxe/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        },
        {
            id: 2,
            slug: 'standard',
            name: t('rooms.standard.name'),
            description: t('rooms.standard.description'),
            price: 80,
            size: 35,
            images: [
                '/rooms/deluxe/main.jpg',
                '/rooms/deluxe/bathroom.jpg',
                '/rooms/deluxe/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        },
        {
            id: 3,
            slug: 'comfort',
            name: t('rooms.comfort.name'),
            description: t('rooms.comfort.description'),
            price: 80,
            size: 35,
            images: [
                '/rooms/deluxe/main.jpg',
                '/rooms/deluxe/bathroom.jpg',
                '/rooms/deluxe/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        },
        {
            id: 4,
            slug: 'superior',
            name: t('rooms.superior.name'),
            description: t('rooms.superior.description'),
            price: 80,
            size: 35,
            images: [
                '/rooms/deluxe/main.jpg',
                '/rooms/deluxe/bathroom.jpg',
                '/rooms/deluxe/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        },
    ]);
    return { news };
};
