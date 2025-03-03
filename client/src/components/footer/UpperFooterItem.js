import { Flex } from "@chakra-ui/react";

const UpperFooterItem = ({ children, flex }) => (
    <Flex direction='column' flex={flex} gap='2' p='2.5' m='2.5' maxW={{ mdDown: '300px'}} align='start'>
        {children}
    </Flex>
);

export default UpperFooterItem;