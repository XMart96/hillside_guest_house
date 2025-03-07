import { Box, Card, Image, HStack, Badge } from "@chakra-ui/react";
import { Btn } from '@components/elements';
import { LuCalendarClock, LuArrowRight } from 'react-icons/lu';
import { Skeleton } from '@components/ui/skeleton';
import { useState } from "react";
import { PageElemContainer } from '@components/layoutElements';


const NewsItem = ({ date, imgPath, details, btn }) => {
    const [loading, setLoading] = useState(true);

    return (
        <PageElemContainer>
            <Card.Root flexDirection="row" overflow="hidden" bg='white' color='gry' border='none'>
                <Skeleton loading={loading}>
                    <Image
                        objectFit="cover"
                        maxW="250px"
                        src={imgPath}
                        alt={details.header}
                        onLoad={() => setLoading(false)}
                    />
                </Skeleton>
                <Box w='100%'>
                    <Card.Body>
                        <Card.Title mb="2">{details.header}</Card.Title>
                        <Card.Description>{details.subheader}</Card.Description>
                        <HStack mt="4">
                            <LuCalendarClock />{date}
                        </HStack>
                        <HStack mt="4">
                            <Badge>Hot</Badge>
                            <Badge>Caffeine</Badge>
                        </HStack>
                    </Card.Body>
                    <Card.Footer justifyContent='flex-end'>
                        <Btn>{btn}<LuArrowRight /></Btn>
                    </Card.Footer>
                </Box>
            </Card.Root>
        </PageElemContainer>
    );
};

export default NewsItem;