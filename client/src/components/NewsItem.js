import { Box, Card, Image, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Btn } from '@components/elements';
import { LuCalendarClock, LuArrowRight } from 'react-icons/lu';
import { Skeleton } from '@components/ui/skeleton';
import { useState } from "react";
import { PageElemContainer } from '@components/layoutElements';


const NewsItem = ({ url, date, imgPath, details, btn }) => {
    const [loading, setLoading] = useState(true);

    return (
        <PageElemContainer w='null'>
            <Card.Root flexDirection={{base: 'column', md: "row"}} overflow="hidden" bg='white' color='gry' border='none'>
                <Skeleton loading={loading}>
                    <Image
                        objectFit="cover"
                        maxW={{base: '150px', md: "250px"}}
                        src={imgPath}
                        alt={details.header}
                        onLoad={() => setLoading(false)}
                    />
                </Skeleton>
                <Box w='100%'>
                    <Card.Body gap='3'>
                        <Card.Title >{details.header}</Card.Title>
                        <Card.Description>{details.subheader}</Card.Description>
                        <HStack >
                            <LuCalendarClock />{date}
                        </HStack>
                    </Card.Body>
                    <Card.Footer justifyContent='flex-end'>
                        <ChakraLink as={Link} to={url}>
                            <Btn>{btn}<LuArrowRight /></Btn>
                        </ChakraLink>
                    </Card.Footer>
                </Box>
            </Card.Root>
        </PageElemContainer>
    );
};

export default NewsItem;