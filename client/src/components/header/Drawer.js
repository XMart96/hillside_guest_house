import {
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
    DrawerCloseTrigger,
    DrawerFooter
} from "@/components/ui/drawer";
import { Button, Text } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import Logo from './Logo';
import Nav from "./Nav";
import { useState } from "react";

const Drawer = () => {
    const [open, setOpen] = useState(false);
    return(
        <DrawerRoot 
            placement="start" 
            open={open} 
            onOpenChange={e => setOpen(e.open)}
        >
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button 
                    variant="ghost" 
                    hideFrom='md' 
                    color='gry' 
                    _hover={{ bg: 'blu', color: 'grn' }}
                >
                    <LuMenu />
                </Button>
            </DrawerTrigger>
            <DrawerContent offset="4" rounded="md" bg='blu'>
                <DrawerHeader>
                    <DrawerTitle>
                        <Logo onClose={() => setOpen(false)} />
                    </DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <Nav onClose={() => setOpen(false)} />
                </DrawerBody>
                <DrawerFooter>
                    <Text>Hillside all rights reserved</Text>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default Drawer;