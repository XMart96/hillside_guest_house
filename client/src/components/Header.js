import { Flex } from "@chakra-ui/react"
import LowerHeader from "./header/LowerHeader";
import UpperHeader from "./header/UpperHeader";

const Header = () => (
    <Flex as="header" direction='column'>
        <UpperHeader />
        <LowerHeader />
    </Flex>
);

export default Header;