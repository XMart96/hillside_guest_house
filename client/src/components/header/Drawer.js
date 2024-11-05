import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, Text } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";

const Drawer = () => (
    <DrawerRoot placement="start">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
            <Button variant="ghost" size="sm" hideFrom='md' color='gry'>
                <LuMenu /> <Text hideBelow='md'>Menu</Text>
            </Button>
        </DrawerTrigger>
        <DrawerContent offset="4" rounded="md">
            <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </DrawerBody>
            <DrawerFooter>
                <DrawerActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
        </DrawerContent>
    </DrawerRoot>
);

export default Drawer;