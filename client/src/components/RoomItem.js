import { Card, Image, Text, Link as ChakraLink, FormatNumber } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Btn } from "@components/elements";
import { useState } from "react";
import { Skeleton } from '@components/ui/skeleton';
import { LuArrowRight } from "react-icons/lu";
import { PageElemContainer } from '@components/layoutElements';
import { useLocation } from "react-router-dom";

const RoomItem = ({ path, imgPath, bgImage, price, header, subheader, btn }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    return(
        <PageElemContainer w='null'>
            <Card.Root maxW='md' overflow="hidden" bg='wht' color='gry' border='none'>
                <Skeleton loading={loading}>
                    <Image
                        src={`${imgPath}${bgImage}`}
                        alt={header}
                        onLoad={() => setLoading(false)}
                    />
                </Skeleton>
                <Card.Body gap="3">
                    <Card.Title>{header}</Card.Title>
                    <Card.Description>
                        {subheader}
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        <FormatNumber 
                            value={price} 
                            style="currency"
                            currency="AMD" 
                            maximumFractionDigits={0}
                            minimumFractionDigits={0}
                        />
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <ChakraLink as={Link} to={`${location.pathname}${path}`}>
                        <Btn>{btn}<LuArrowRight /></Btn>
                    </ChakraLink>
                </Card.Footer>
            </Card.Root>
        </PageElemContainer>
    );
};

export default RoomItem;