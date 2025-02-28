import { Flex } from "@chakra-ui/react";
import image from '../../assets/room2/11-min.jpg';
import HeaderSection from "../elements/HeaderSection";

const ServicesPage = () => (
    <Flex direction='column'>
        <HeaderSection bg={image} header='Services' />
    </Flex>
);

export default ServicesPage;