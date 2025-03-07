import { Flex, Heading } from "@chakra-ui/react";
import HeaderSection from "@components/HeaderSection";

const AboutPage = () => {
    

    return (
        <Flex direction='column'>
            <HeaderSection bg='/assets/other/11-min.jpg' header='About Us' />
            <Flex bg='white'>
                <Heading color='gry'>About Hillside Guest House</Heading>
            </Flex>
        </Flex>
    );
};

export default AboutPage;