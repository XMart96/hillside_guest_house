import { Flex, Heading } from "@chakra-ui/react";
import BreadCrumb from "../elements/BreadCrumb";

const HeaderSection = ({bg, header}) => (
    <Flex 
        h='250px'
        bgSize='cover'
        backgroundPosition='center'
        bgImage={`url(${bg})`}
        justify='center'
        align='center'
        direction='column'
    >
        <Heading size='4xl' mb='1'>{header}</Heading>
        <BreadCrumb />
    </Flex>
);

export default HeaderSection