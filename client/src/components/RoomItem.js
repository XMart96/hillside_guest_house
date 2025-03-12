import { Card, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Btn } from "@components/elements";
import { useState } from "react";
import { Skeleton } from '@components/ui/skeleton';
import { LuArrowRight } from "react-icons/lu";
import { PageElemContainer } from '@components/layoutElements';

const RoomItem = ({ url, imgPath, price, details, btn }) => {
    const [loading, setLoading] = useState(true);

    return(
        <PageElemContainer w='null'>
            <Card.Root maxW='md' overflow="hidden" bg='wht' color='gry' border='none'>
                <Skeleton loading={loading}>
                    <Image
                        src={imgPath}
                        alt={details.header}
                        onLoad={() => setLoading(false)}
                    />
                </Skeleton>
                <Card.Body gap="3">
                    <Card.Title>{details.header}</Card.Title>
                    <Card.Description>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces.
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        {price}
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <ChakraLink as={Link} to={url}>
                        <Btn>{btn}<LuArrowRight /></Btn>
                    </ChakraLink>
                </Card.Footer>
            </Card.Root>
        </PageElemContainer>
    );
};

export default RoomItem;