import { Flex } from "@chakra-ui/react"
import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

const Header = () => (
    <Flex as="header" direction='column'>
        <UpperHeader />
        <LowerHeader />
    </Flex>
);

export default Header;