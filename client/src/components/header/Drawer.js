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
    DrawerTitle,
    DrawerRoot,
    DrawerTrigger,
    DrawerCloseTrigger,
    DrawerFooter
} from "@components/ui/drawer";
import { LuMenu } from "react-icons/lu";
import Logo from "@header/Logo";
import Nav from "@header/Nav";
import Rights from "@components/Rights";
import { Btn } from "@components/elements";
import { useState } from "react";

const Drawer = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <DrawerRoot placement="start" open={open} onOpenChange={e => setOpen(e.open)}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Btn hideFrom="md" bg="transparent" color="gry">
                    <LuMenu />
                </Btn>
            </DrawerTrigger>
            <DrawerContent offset="4" rounded="md" bg="blu">
                <DrawerHeader>
                    <DrawerTitle>
                        <Logo onClose={handleClose} />
                    </DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <Nav onClose={handleClose} />
                </DrawerBody>
                <DrawerFooter>
                    <Rights />
                </DrawerFooter>
                <DrawerCloseTrigger color="grn" />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default Drawer;