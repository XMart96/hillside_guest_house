import { Box } from "@chakra-ui/react";

import UpperHeader from "@header/UpperHeader";
import LowerHeader from "@header/LowerHeader";

const Header = () => (
    <Box>
        <UpperHeader />
        <LowerHeader />
    </Box>
);

export default Header;