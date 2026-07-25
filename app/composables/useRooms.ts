export interface Room {
    id: number;
    slug: string;
    name: string;
    fullName: string;
    description: string;
    price: number;
    size: number;
    image_path: string;
    images: string[];
    amenities: {
        label: string;
        icon: string;
    }[];
}

export const useRooms = () => {
    const { t } = useI18n();
    let id = 0;

    const makeRoom = (
        params: Omit<
            Room,
            | 'id'
            | 'name'
            | 'fullName'
            | 'description'
            | 'image_path'
            | 'amenities'
        >,
    ): Room => ({
        ...params,
        id: ++id,
        name: t(`rooms.${params.slug}.name`),
        fullName: t(`rooms.${params.slug}.fullName`),
        description: t(`rooms.${params.slug}.description`),
        image_path: `/images/rooms/${params.slug}`,
        amenities: [
            { label: 'Non-smoking rooms', icon: '' },
            { label: 'Free Wifi', icon: '' },
            { label: 'Free parking', icon: '' },
            { label: 'Family rooms', icon: '' },
            { label: 'Terrace', icon: '' },
            { label: 'Tea/Coffee Maker in All Rooms', icon: '' },
            { label: 'Breakfast', icon: '' },
        ],
    });

    const rooms = computed<Room[]>(() => [
        makeRoom({
            slug: 'deluxe',
            price: 80,
            size: 35,
            images: ['1.jpg'],
        }),
        makeRoom({
            slug: 'standard',
            price: 80,
            size: 35,
            images: ['1.jpg'],
        }),
        makeRoom({
            slug: 'comfort',
            price: 80,
            size: 35,
            images: ['1.jpg'],
        }),
        makeRoom({
            slug: 'superior',
            price: 80,
            size: 35,
            images: ['1.jpg'],
        }),
    ]);

    return { rooms };
};
