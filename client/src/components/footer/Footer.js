import { Box } from '@chakra-ui/react';

import UpperFooter from '@footer/UpperFooter';
import LowerFooter from '@footer/LowerFooter';

const Footer = () => (
    <Box as='footer' bg='blu'>
        <UpperFooter />
        <LowerFooter />
    </Box>
);

export default Footer;