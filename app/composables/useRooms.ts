export interface Room {
    id: number;
    slug: string;
    name: string;
    fullName: string;
    description: string;
    price: number;
    size: number;
    images: string[];
    amenities: string[];
}

export const useRooms = () => {
    const { t } = useI18n();

    const makeRoom = (
        params: Omit<Room, 'name' | 'fullName' | 'description'>,
    ): Room => ({
        ...params,
        name: t(`rooms.${params.slug}.name`),
        fullName: t(`rooms.${params.slug}.fullName`),
        description: t(`rooms.${params.slug}.description`),
    });

    const rooms = computed<Room[]>(() => [
        makeRoom({
            id: 1,
            slug: 'deluxe',
            price: 80,
            size: 35,
            images: [
                '/rooms/deluxe/main.jpg',
                '/rooms/deluxe/bathroom.jpg',
                '/rooms/deluxe/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        }),
        makeRoom({
            id: 2,
            slug: 'standard',
            price: 80,
            size: 35,
            images: [
                '/rooms/standard/main.jpg',
                '/rooms/standard/bathroom.jpg',
                '/rooms/standard/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        }),
        makeRoom({
            id: 3,
            slug: 'comfort',
            price: 80,
            size: 35,
            images: [
                '/rooms/comfort/main.jpg',
                '/rooms/comfort/bathroom.jpg',
                '/rooms/comfort/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        }),
        makeRoom({
            id: 4,
            slug: 'superior',
            price: 80,
            size: 35,
            images: [
                '/rooms/superior/main.jpg',
                '/rooms/superior/bathroom.jpg',
                '/rooms/superior/view.jpg',
            ],
            amenities: ['wifi', 'ac', 'minibar', 'balcony'],
        }),
    ]);

    return { rooms };
};
