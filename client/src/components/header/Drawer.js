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
import { LuMenu } from "react-icons/lu";
import Logo from './Logo';
import Nav from "./Nav";
import { Suspense, useState } from "react";
import Rights from "../footer/Rights";
import { DrawerBtn } from "../elements";

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
                <DrawerBtn 
                    variant="ghost" 
                    hideFrom='md' 
                    _hover={{ bg: 'blu', color: 'grn' }}
                >
                    <LuMenu />
                </DrawerBtn>
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
                    <Suspense><Rights /></Suspense>
                </DrawerFooter>
                <DrawerCloseTrigger color='grn'/>
            </DrawerContent>
        </DrawerRoot>
    );
};

export default Drawer;