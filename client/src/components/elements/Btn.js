import { Button } from "@chakra-ui/react";

const Btn = ({children, ...props}) => (
    <Button
        bg="grn"
        color="white"
        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }}
        transition="0.2s"
        variant="ghost"
        {...props}
    >
        {children}
    </Button>
);

export default Btn;