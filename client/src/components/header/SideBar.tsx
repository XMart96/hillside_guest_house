import { Drawer, Portal, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Nav } from '@header/Nav';
import { Logo } from '@header/Logo';
import { LuMenu, LuX } from 'react-icons/lu';
import { Rights } from '@components/Rights';

export const SideBar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <Drawer.Root
            placement='start'
            open={open}
            onOpenChange={e => setOpen(e.open)}
        >
            <Drawer.Trigger asChild>
                <Button hideFrom='md' bg='transparent' color='gry'>
                    <LuMenu />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner p='3'>
                    <Drawer.Content rounded='md' bg='blu'>
                        <Drawer.Header>
                            <Drawer.Title>
                                <Logo onClose={handleClose} />
                            </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Nav onClose={handleClose} />
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Rights />
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <Button bg='transparent' color='grn'>
                                <LuX />
                            </Button>
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
};
