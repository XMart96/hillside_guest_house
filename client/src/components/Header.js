import { Flex, Text, Image, Separator, Link } from "@chakra-ui/react"
import logo from '../assets/logo_dark.svg';

import { Button } from "@/components/ui/button";
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
import { 
    MenuContent,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuRoot,
    MenuTrigger
} from "@/components/ui/menu";
import { LuLanguages, LuInstagram, LuMail, LuPhone, LuMenu } from 'react-icons/lu';
import { useState } from "react";

const LangMenuComponent = () => {
    const [lang, setLang] = useState("asc");

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant='ghost' size="sm">
                    <LuLanguages /> Lang
                </Button>
            </MenuTrigger>
            <MenuContent minW="10rem">
                <MenuRadioItemGroup
                  value={lang}
                  onValueChange={(e) => setLang(e.value)}
                >
                <MenuRadioItem value="asc">Ascending</MenuRadioItem>
                <MenuRadioItem value="desc">Descending</MenuRadioItem>
                </MenuRadioItemGroup>
            </MenuContent>
        </MenuRoot>
    );
};

const DrawerComponent = () => (
    <DrawerRoot placement="start">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" hideFrom='md'>
          <LuMenu /> Menu
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

const Header = () => (
    <Flex as="header" bg="blue.500" px='5' justify={{ base: 'space-between', md: 'space-around' }}>
        <Image src={logo} alt="Hillside logo" w={{ base: '5rem', md: '7rem'}} mr='5' />
        <Flex direction='column' justify='space-evenly' align='flex-end'>
                <Flex gap={8} smOnly={{gap: 4, fontSize: 'sm'}} align='center' hideBelow='md'>
                    <Link href="#">
                        <LuPhone /> +37443290127
                    </Link>
                    <Link href='#'>
                        <LuMail /> info@hillside.am
                    </Link>
                    <Link href='#'>
                        <LuInstagram />
                    </Link>
                    <LangMenuComponent />
                </Flex>
                <Separator hideBelow='md' />
                <Flex gap={8} smOnly={{gap: 4, fontSize: 'sm'}} hideBelow='md'>
                    <Text color="white">Home</Text>
                    <Text color="white">About us</Text>
                    <Text color="white">Rooms</Text>
                    <Text color="white">Services</Text>
                    <Text color="white">News</Text>
                    <Text color="white">Contacts</Text>
                </Flex>
            <DrawerComponent/>
        </Flex>
    </Flex>
);

export default Header;