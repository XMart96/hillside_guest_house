import { Button } from "@chakra-ui/react";
import logger from "@/logger";

export const Btn = ({children, ...props}) => {
    !children && logger('assert', '107');

    return(
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
};