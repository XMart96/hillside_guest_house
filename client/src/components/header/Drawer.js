/*
*   FileName: Drawer.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Drawer component renders a side navigation drawer that appears on smaller screens. 
*   It includes a menu button, the logo, navigation links, and rights information.
*   Chakra UI and react-icons are used for UI components and icons.
*/

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
import Rights from "../elements/Rights";
import Btn  from "../elements/Btn";

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
                <Btn 
                    hideFrom='md'
                    bg='transparent' 
                    color='gry'
                >
                    <LuMenu />
                </Btn>
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