import { Flex } from "@chakra-ui/react"
import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

const Header = () => (
    <Flex as="header" direction='column'>
        <UpperHeader />
        <LowerHeader />
    </Flex>
);

export default Header;