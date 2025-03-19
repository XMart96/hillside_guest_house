import { Flex, Card, Image, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Btn } from '@components/elements';
import { LuCalendarClock, LuArrowRight } from 'react-icons/lu';
import { Skeleton } from '@components/ui/skeleton';
import { useState } from "react";
import { PageElemContainer } from '@components/layoutElements';
import { useLocation } from "react-router-dom";

const NewsItem = ({ date, path, imgPath, bgImage, header, subheader, btn }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    return (
        <PageElemContainer w='null'>
            <Card.Root 
                flexDirection={{base: 'column', md: "row"}} 
                alignItems={{base: 'center', md: 'stretch'}} 
                overflow="hidden" 
                bg='wht' 
                color='gry' 
                border='none'
            >
                <Skeleton loading={loading}>
                    <Image
                        objectFit="cover"
                        maxW={{md: "250px"}}
                        src={`${imgPath}${bgImage}`}
                        alt={header}
                        onLoad={() => setLoading(false)}
                    />
                </Skeleton>
                <Flex w='100%' direction='column'>
                    <Card.Body gap='3'>
                        <Card.Title >{header}</Card.Title>
                        <Card.Description>{subheader}</Card.Description>
                        <HStack >
                            <LuCalendarClock />{date}
                        </HStack>
                    </Card.Body>
                    <Card.Footer justifyContent={{base: 'flex-start', md: 'flex-end'}}>
                        <ChakraLink as={Link} to={`${location.pathname}${path}`}>
                            <Btn>{btn}<LuArrowRight /></Btn>
                        </ChakraLink>
                    </Card.Footer>
                </Flex>
            </Card.Root>
        </PageElemContainer>
    );
};

export default NewsItem;