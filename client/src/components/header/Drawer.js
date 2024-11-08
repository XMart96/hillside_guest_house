import {
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import Logo from './Logo';

const Drawer = ({ children }) => (
    <DrawerRoot placement="start">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
            <Button variant="ghost" hideFrom='md' color='gry' _hover={{ bg: 'blu', color: 'grn' }}>
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
                {children}
            </DrawerBody>
        </DrawerContent>
    </DrawerRoot>
);

export default Drawer;