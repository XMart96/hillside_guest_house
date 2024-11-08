import {
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
    DrawerCloseTrigger
} from "@/components/ui/drawer";
import { Button } from "@chakra-ui/react";
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
                        <Logo />
                    </DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <Nav onClose={() => setOpen(false)} />
                </DrawerBody>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default Drawer;