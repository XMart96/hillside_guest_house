import { Flex, Heading } from "@chakra-ui/react";
import image from '../../assets/other/11-min.jpg';
import HeaderSection from "../elements/HeaderSection";

const AboutPage = () => {
    

    return (
        <Flex direction='column'>
            <HeaderSection bg={image} header='About Us' />
            <Flex bg='white'>
                <Heading color='gry'>About Hillside Guest House</Heading>
            </Flex>
        </Flex>
    );
};

export default AboutPage;