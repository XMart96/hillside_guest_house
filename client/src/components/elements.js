import { Button } from "@chakra-ui/react";

export const Btn = ({children, ...props}) => (
    <Button
        bg="grn"
        color="wht"
        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }}
        transition="0.2s"
        variant="ghost"
        {...props}
    >
        {children}
    </Button>
);