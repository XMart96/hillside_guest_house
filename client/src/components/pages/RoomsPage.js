import { Flex } from "@chakra-ui/react";
import image from '../../assets/room4/9-min.jpg';
import HeaderSection from "../elements/HeaderSection";

const RoomsPage = () => (
    <Flex direction='column'>
        <HeaderSection bg={image} header='Rooms' />
    </Flex>
);

export default RoomsPage;