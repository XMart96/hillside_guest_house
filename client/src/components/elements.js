import { Button } from "@chakra-ui/react";

export const DrawerBtn = ({children, ...props}) => (
    <Button
        color="gry"
        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }}
        transition="0.4s"
        variant="ghost"
        {...props}
    >
        {children}
    </Button>
);

export const Btn = ({children, ...props}) => (
    <Button
        bg="grn"
        color="white"
        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }}
        transition="0.4s"
        variant="ghost"
        {...props}
    >
        {children}
    </Button>
);