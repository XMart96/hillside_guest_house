import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Image, RadioCard, Skeleton, Stack } from '@chakra-ui/react';

export const RoomSelect = () => {
    const [loading, setLoading] = useState(true);
    const ns = ['rooms'];
    const { t } = useTranslation(ns);

    type RoomsItems = {
        imgPath: string;
        bgImage: string;
        header: string;
    };
    const rooms: RoomsItems[] = t('rooms', {
        returnObjects: true,
    }) as RoomsItems[];

    return (
        <RadioCard.Root defaultValue='next' w='100%'>
            <RadioCard.Label>Select Room</RadioCard.Label>
            <Stack align='stretch' gap='5'>
                {rooms.map(room => (
                    <RadioCard.Item key={room.header} value={room.header}>
                        <RadioCard.ItemHiddenInput />
                        <RadioCard.ItemControl>
                            <RadioCard.ItemContent>
                                <RadioCard.ItemText>
                                    {room.header}
                                </RadioCard.ItemText>
                                <RadioCard.ItemDescription>
                                    <Skeleton loading={loading}>
                                        <Image
                                            w='150px'
                                            src={`${room.imgPath}${room.bgImage}`}
                                            alt={room.header}
                                            onLoad={() => setLoading(false)}
                                        />
                                    </Skeleton>
                                </RadioCard.ItemDescription>
                            </RadioCard.ItemContent>
                            <RadioCard.ItemIndicator />
                        </RadioCard.ItemControl>
                    </RadioCard.Item>
                ))}
            </Stack>
        </RadioCard.Root>
    );
};
