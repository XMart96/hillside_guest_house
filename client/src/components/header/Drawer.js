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
import { useState } from "react";

import Logo from "@header/Logo";
import Nav from "@header/Nav";
import Rights from "@components/Rights";
import { Btn } from "@components/elements";

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