import { Box, RadioCard, Stack, Image } from "@chakra-ui/react";
import { Skeleton } from '@components/ui/skeleton';
import { useTranslation } from "react-i18next";
import { useState } from "react";

const BookRoomSelect = () => {
    const { t } = useTranslation(['rooms']);
    const [loading, setLoading] = useState(true);

    return (
        <Box>
            <RadioCard.Root defaultValue="next" w='100%'>
                <RadioCard.Label>Select Room</RadioCard.Label>
                <Stack align="stretch" gap='5'>
                    {t('rooms', { returnObjects: true }).map(r => (
                        <RadioCard.Item key={r.id} value={r.id}>
                            <RadioCard.ItemHiddenInput />
                            <RadioCard.ItemControl>
                                <RadioCard.ItemContent>
                                    <RadioCard.ItemText>{r.header}</RadioCard.ItemText>
                                    <RadioCard.ItemDescription>
                                        <Skeleton loading={loading}>
                                            <Image
                                                w='150px'
                                                src={`${r.imgPath}${r.bgImage}`}
                                                alt={r.header}
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
        </Box>
    );
};

export default BookRoomSelect;