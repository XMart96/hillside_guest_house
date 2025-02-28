import { Flex } from "@chakra-ui/react";
import image from '../../assets/room3/10-min.jpg';
import HeaderSection from "../elements/HeaderSection";

const NewsPage = () => (
    <Flex direction='column'>
        <HeaderSection bg={image} header='News' />
    </Flex>
);

export default NewsPage;